import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router, useForm, usePage } from '@inertiajs/react';
import { useCallback, useEffect, useState } from 'react';
import CategoryList from './CategoryComponents/CategoryList';
import FormModal from './CategoryComponents/FormModal';
import DeleteModal from './CategoryComponents/DeleteModal';
import Pagination from './CategoryComponents/Pagination';
import LiveSearch from './CategoryComponents/LiveSearch';

export default function Category({ auth, categories: initialCategories }) {
    const { errors } = usePage().props;
    const { data, setData, processing, reset } = useForm({
        name: '',
        slug: '',
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [categories, setCategories] = useState(initialCategories.data);
    const [pagination, setPagination] = useState({
        current_page: initialCategories.current_page,
        last_page: initialCategories.last_page,
        from: initialCategories.from,
        to: initialCategories.to,
        total: initialCategories.total,
        per_page: initialCategories.per_page,
    });
    const [editCategoryId, setEditCategoryId] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        setCategories(initialCategories.data);
        setPagination({
            current_page: initialCategories.current_page,
            last_page: initialCategories.last_page,
            from: initialCategories.from,
            to: initialCategories.to,
            total: initialCategories.total,
            per_page: initialCategories.per_page,
        });
    }, [initialCategories]);

    const openModal = useCallback(
        (category = null) => {
            if (category) {
                setIsEditMode(true);
                setEditCategoryId(category.id);
                setData({
                    name: category.name,
                    slug: category.slug,
                });
            } else {
                setIsEditMode(false);
                setEditCategoryId(null);
                reset();
            }
            setIsModalOpen(true);
        },
        [setData, reset]
    );

    const closeModal = useCallback(() => {
        setIsModalOpen(false);
        reset();
    }, [reset]);

    const openDeleteModal = useCallback(id => {
        closeModal();
        setDeleteId(id);
        setIsDeleteModalOpen(true);
    }, []);

    const closeDeleteModal = useCallback(() => {
        setIsDeleteModalOpen(false);
        setDeleteId(null);
    }, []);

    const handleChange = useCallback(
        e => {
            const key = e.target.id;
            const value = e.target.value;
            setData(key, value);
        },
        [setData]
    );

    const handleDelete = useCallback(
        id => {
            router.delete(route('posts.categories.destroy', id));
            setCategories(prev => prev.filter(category => category.id !== id));
            closeDeleteModal();
        },
        [closeDeleteModal]
    );

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            const formData = new FormData();
            formData.append('name', data.name);
            formData.append('slug', data.slug);

            const routeAction = isEditMode
                ? route('posts.categories.update', editCategoryId)
                : '/categories';

            router.post(routeAction, formData, {
                onSuccess: () => {
                    closeModal();
                    if (isEditMode) {
                        setCategories(prev =>
                            prev.map(category =>
                                category.id === editCategoryId
                                    ? { ...category, ...data }
                                    : category
                            )
                        );
                    } else {
                        setCategories(prev => [data, ...prev]);
                    }
                }
            });
        },
        [data, isEditMode, editCategoryId, closeModal]
    );

    const handlePageChange = useCallback(page => {
        router.get(
            route('posts.categories.index', { page }),
            {
                onSuccess: page => {
                    setPosts(page.props.categories.data);
                    setPagination({
                        current_page: page.props.categories.current_page,
                        last_page: page.props.categories.last_page,
                        from: page.props.categories.from,
                        to: page.props.categories.to,
                        total: page.props.categories.total,
                        per_page: page.props.categories.per_page,
                    });
                },
            }
        );
    }, []);

    const handleSearchResults = useCallback(
        results => {
            if (results && JSON.stringify(results) !== JSON.stringify(categories)) {
                setCategories(results);
            } else if (!results) {
                handlePageChange(pagination.current_page);
            }
        },
        [categories, pagination.current_page, handlePageChange]
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className='flex justify-between items-center'>
                    <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
                        List of Post Categories
                    </h2>
                    <Link href={route('posts.index')} className='font-semibold text-md text-blue-500 underline hover:text-blue-700'>
                        Back to Posts
                    </Link>
                </div>
            }
        >
            <Head title='Post Categories' />

            <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                        <div className='flex justify-between space-x-4 p-6 text-gray-900'>
                            <button
                                className='w-1/6 btn bg-secondary border-none text-white shadow-md hover:bg-tertiary'
                                onClick={() => openModal()}
                            >
                                Add new Category
                            </button>
                            <div className='w-5/6'>
                                <LiveSearch onResults={handleSearchResults} />
                            </div>
                        </div>
                        <CategoryList
                            categories={categories}
                            onEdit={openModal}
                            onDelete={openDeleteModal}
                        />
                        <Pagination
                            pagination={pagination}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>

            <FormModal
                isModalOpen={isModalOpen}
                closeModal={closeModal}
                handleSubmit={handleSubmit}
                isEditMode={isEditMode}
                data={data}
                handleChange={handleChange}
                errors={errors}
                processing={processing}
            />

            <DeleteModal
                isModalOpen={isDeleteModalOpen}
                closeModal={closeDeleteModal}
                handleDelete={handleDelete}
                deleteId={deleteId}
            />
        </AuthenticatedLayout>
    );
}