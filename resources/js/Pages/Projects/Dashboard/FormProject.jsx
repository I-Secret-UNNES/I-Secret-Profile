import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal"
import { useForm, router, Link } from "@inertiajs/react";
import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { Quill } from "react-quill";

function FormProject({ data, setData, formTitle, errors, onSubmitHandler, tranformTitleToSlug, slugChangeHandler }) {
    console.log(data.description)
    const [quill, setQuill] = useState();
    const quillRef = useRef(null);
    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'header': '3' }, { 'header': '4' }, { 'font': [] }],
            [{ size: [16] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image', 'video'],
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
        }
    };
    function handleChange(content, delta, source, editor) {
        setData('description', content);
    }

    const onSubmit = () => {
        event.preventDefault()
        onSubmitHandler(data)
    }

    return (
        <Modal show={true} onClose={false} maxWidth='2xl'>
            <form className='flex flex-col p-0 ' onSubmit={onSubmit}>
                <h2 className='text-lg font-medium text-gray-900 px-6 mt-6'>{formTitle}</h2>

                <div className="h-[27rem] overflow-y-scroll px-6">
                    <div className='mt-4'>
                        <InputLabel value={'Cover'} htmlFor="cover" />
                        <input id="cover" type="file" onChange={e => setData('image', e.target.files[0])} className="file-input file-input-bordered w-full bg-white focus:outline-blue-700 focus:border-blue-300 duration-100 text-gray-800" />
                        {errors.image && (
                            <p className="text-red-500 text-xs italic">{errors.image}</p>
                        )}
                    </div>

                    <div className='mt-4'>
                        <InputLabel value={'Title'} htmlFor="title" />
                        <input id="title" type="text" value={errors.title ? old('title') : data.title} onChange={e => tranformTitleToSlug(e.target.value)} placeholder="Type here" className="input input-bordered w-full bg-white focus:outline-blue-700 focus:border-blue-300 duration-100 text-gray-800" />
                        {errors.title && (
                            <p className="text-red-500 text-xs italic">{errors.title}</p>
                        )}
                    </div>

                    <div className='mt-4'>
                        <InputLabel value={'Slug'} htmlFor="slug" />
                        <input id="slug" type="text" value={data.slug} onChange={e => slugChangeHandler(e.target.value)} placeholder="Type here" className="input input-bordered w-full bg-white focus:outline-blue-700 focus:border-blue-300 duration-100 text-gray-800" />
                        {errors.slug && (
                            <p className="text-red-500 text-xs italic">{errors.slug}</p>
                        )}
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className='mt-4'>
                            <InputLabel value={'Devision'} htmlFor="slug" />
                            <select className="bg-white text-black select select-bordered w-full max-w-xs" onChange={e => setData('devision', e.target.value)} value={data.devision}>
                                <option disabled selected>Choose Your Devision</option>
                                <option>Programming</option>
                                <option>Networking</option>
                                <option>Media & User Interface</option>
                                <option>Reasearch</option>
                            </select>
                            {errors.devision && (
                                <p className="text-red-500 text-xs italic">{errors.devision}</p>
                            )}
                        </div>
                        <div className='mt-4'>
                            <label class="inline-flex items-start cursor-pointer flex-col">
                                <span class="font-medium text-gray-700 text-sm mb-2">Highlight Project</span>
                                <input type="checkbox" checked={data.highlight} class="sr-only peer" onChange={e => setData('highlight', e.target.checked)} />
                                <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            </label>
                            {errors.highlight && (
                                <p className="text-red-500 text-xs italic">{errors.highlight}</p>
                            )}
                        </div>
                    </div>


                    <div className='mt-4'>
                        <InputLabel value={'Description'} htmlFor="quill" />
                        {errors.description && (
                            <p className="text-red-500 text-xs italic">{errors.description}</p>
                        )}
                        <ReactQuill
                            ref={quillRef}
                            id="quill"
                            theme="snow"
                            value={data.description}
                            className="h-[12rem] text-gray-800"
                            onChange={handleChange}
                            formats={['header', 'font', 'size', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'indent', 'link', 'image', 'video']}
                            modules={modules}
                        />
                    </div>
                </div>

                <div className='flex justify-end p-6'>
                    <Link
                    href={route('project.index')}
                        className='btn bg-gray-500 text-white mr-3'
                    >
                        Cancel
                    </Link>
                    <button type='submit' className='btn bg-primary text-white'>
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export default FormProject