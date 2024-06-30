import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router, useForm, usePage } from "@inertiajs/react";
import { useCallback, useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import FormProject from "./FormProject";
import ListProject from "./ListProject";
import SearchProject from "./SearchProjects";
import DOMPurify from "dompurify";

export default function Projects({ auth, projects, APP_URL, searchKeyword, formHandler, updateData }) {
    console.log("Projects : " + updateData?.description)
    // // Create Button
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

    // const onSubmitHandler = async (data) => {
    //     console.log(data)
    //     if (isUpdate) {
    //         await router.visit(
    //             '/project/update',
    //             {
    //                 method: 'post',
    //                 data: {
    //                     ...data,
    //                 }
    //             }
    //         )
    //     }
    //     else {
    //         await router.visit(
    //             '/project',
    //             {
    //                 method: 'post',
    //                 data: {
    //                     ...data,
    //                     creator: auth.user.id
    //                 }
    //             }
    //         )

    //     }
    //     reset()
    // }

    // useEffect(() => {
    //     if (Object.keys(errors).length != 0) {
    //         openModal()
    //     }
    // }, [errors])


    // // search handler section
    // const onSearch = (event) => {
    //     // event.preventDefault()
    //     router.visit('/project',
    //         {
    //             method: 'get',
    //             data: {
    //                 search: search
    //             }
    //         }
    //     )
    // }

    // useEffect(() => {
    //     if (search != '' && search != searchKeyword) {
    //         onSearch()
    //     }
    // }, [search])


    let { errors, flash, old } = usePage().props
    const [search, setSearch] = useState(searchKeyword)

    // form handler
    const [isUpdate, setIsUpdate] = useState(false)
    const { data, setData, post, progress, reset, setDefaults } = useForm(
        updateData ? {
            ...updateData
        } :
            {
                id: null,
                image: null,
                title: null,
                description: null,
                devision: null,
                highlight: false,
                creator: null,
                slug: null,
            }
    )

    useEffect(() => {
        setData('description', DOMPurify.sanitize(updateData?.description))
    }, [updateData])

    const tranformTitleToSlug = async (text) => {
        setData({
            ...data,
            title: text,
            slug: text.toLowerCase()
                .replace(/[^a-z0-9\s-]/g, '')
                .replace(/\s+/g, '-')
                .replace(/-+/g, '-')
                .replace(/^-+|-+$/g, '')
        })
    }

    const slugChangeHandler = (text) => {
        setData('slug', text
            .toLowerCase()
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-+|-+$/g, ''))
    }

    const onSubmitHandler = async (data) => {
        const submited = {
            ...data,
            description: data.description,
            creator: auth.user.id
        }
        console.log(submited)
        if (formHandler.type == 'update') {
            await router.visit(
                route('update.project'),
                {
                    method: 'post',
                    data: {
                        ...submited,
                    }
                }
            )
        } else {
            await router.visit(
                route('project.store'),
                {
                    method: 'post',
                    data: submited,
                    preserveState: true,
                    onError: () => {
                        console.log(errors)
                    }
                }
            )
        }
    }

    return (
        <Authenticated
            user={auth.user}
            header={
                <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
                    Projects
                </h2>
            }
        >
            <Head title="Project - Dashbaord" />

            <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                        {
                            flash.fail && (
                                <div className="toast toast-center z-50">
                                    <div className="alert alert-error">
                                        <span>{flash.fail}</span>
                                    </div>
                                </div>
                            )
                        }
                        {
                            flash.success && (
                                <div className={`toast toast-center z-50`}>
                                    <div className="alert alert-success">
                                        <span>{flash.success}</span>
                                    </div>
                                </div>
                            )
                        }
                        <div className='p-6 text-gray-900 flex justify-between'>
                            <Link
                                href={route('project.create')}
                                className='btn bg-secondary border-none text-white shadow-md hover:bg-tertiary'
                            >
                                Add Project
                            </Link>
                            <SearchProject
                                value={search}
                                setSearch={setSearch}
                            />
                        </div>
                        <div className="px-6 pb-6">
                            <ListProject
                                key={'listprojects'}
                                datas={projects}
                                APP_URL={APP_URL}
                                setData={setData}
                                setIsUpdate={setIsUpdate}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {
                formHandler.active ? (
                    <FormProject
                        onSubmitHandler={onSubmitHandler}
                        errors={errors}
                        data={data}
                        setData={setData}
                        formTitle={data?.id ? "Update Project" : "Add Project"}
                        tranformTitleToSlug={tranformTitleToSlug}
                        slugChangeHandler={slugChangeHandler}
                    />
                ) : null
            }

        </Authenticated>
    )
}