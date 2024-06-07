import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import LiveSearch from '../Blog/BlogComponents/LiveSearch';
import { useCallback, useEffect, useState } from 'react';
import FormModal from './BlogComponents/FormModal';
import PostList from './BlogComponents/PostList';
import DeleteModal from './BlogComponents/DeleteModal';
import Pagination from './BlogComponents/Pagination';

export default function Blog({ auth, posts: initialPosts }) {
    const { errors } = usePage().props;
    const { data, setData, processing, reset } = useForm({
        title: '',
        slug: '',
        category: '',
        thumbnail_img: null,
        body: ''
    });

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const [posts, setPosts] = useState(initialPosts.data);
    const [pagination, setPagination] = useState({
        current_page: initialPosts.current_page,
        last_page: initialPosts.last_page,
        from: initialPosts.from,
        to: initialPosts.to,
        total: initialPosts.total,
        per_page: initialPosts.per_page,
    });
    const [editPostId, setEditPostId] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        setPosts(initialPosts.data);
        setPagination({
            current_page: initialPosts.current_page,
            last_page: initialPosts.last_page,
            from: initialPosts.from,
            to: initialPosts.to,
            total: initialPosts.total,
            per_page: initialPosts.per_page,
        });
    }, [initialPosts]);

    const openModal = useCallback(
        (post = null) => {
            if (post) {
                setIsEditMode(true);
                setEditPostId(post.id);
                setData({
                    title: post.title,
                    slug: post.slug,
                    thumbnail_img: null,
                    category: post.category,
                    body: post.body
                });
            } else {
                setIsEditMode(false);
                setEditPostId(null);
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
        setDeleteId(id);
        setIsDeleteModalOpen(true);
    }, []);

    const closeDeleteModal = useCallback(() => {
        setIsDeleteModalOpen(false);
        setDeleteId(null);
    }, []);

    const handlePageChange = useCallback(page => {
        router.get(
            route('posts.index', { page }),
            {
                onSuccess: page => {
                    setPosts(page.props.posts.data);
                    setPagination({
                        current_page: page.props.posts.current_page,
                        last_page: page.props.posts.last_page,
                        from: page.props.posts.from,
                        to: page.props.posts.to,
                        total: page.props.posts.total,
                        per_page: page.props.posts.per_page,
                    });
                },
            }
        );
    }, []);

    const handleSearchResults = useCallback(
        results => {
            if (results && JSON.stringify(results) !== JSON.stringify(posts)) {
                setPosts(results);
            } else if (!results) {
                handlePageChange(pagination.current_page);
            }
        },
        [posts, pagination.current_page, handlePageChange]
    );

    const handleChange = useCallback(
        e => {
            const key = e.target.id;
            const value =
                e.target.type === 'file' ? e.target.files[0] : e.target.value;
            setData(key, value);
        },
        [setData]
    );

    const handleQuillChange = useCallback(
        value => { setData('body', value); },
        [setData]
    );

    const handleSubmit = useCallback(
        e => {
            e.preventDefault();

            const formData = new FormData();
            formData.append('title', data.title);
            formData.append('slug', data.slug);
            formData.append('category', data.category);
            formData.append('body', data.body);
            if (data.thumbnail_img) {
                formData.append('thumbnail_img', data.thumbnail_img);
            }

            const routeAction = isEditMode
                ? route('posts.update', editPostId)
                : route('posts.store');

            router.post(routeAction, formData, {
                onSuccess: () => {
                    closeModal();
                    if (isEditMode) {
                        setPosts(prev =>
                            prev.map(post =>
                                post.id === editPostId
                                    ? { ...post, ...data, thumbnail_img: post.thumbnail_img }
                                    : post
                            )
                        );
                    } else {
                        setPosts(prev => [data, ...prev]);
                    }
                }
            });
        },
        [data, isEditMode, editPostId, closeModal]
    );

    const handleDelete = useCallback(
        id => {
            router.delete(route('posts.destroy', id));
            setPosts(prev => prev.filter(post => post.id !== id));
            closeDeleteModal();
        },
        [closeDeleteModal]
    );

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
                    Blog
                </h2>
            }
        >
            <Head title='Blog' />

            <div className='py-12'>
                <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
                    <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
                        <div className='flex justify-between space-x-4 p-6 text-gray-900'>
                            <button
                                className='w-1/6 btn bg-secondary border-none text-white shadow-md hover:bg-tertiary'
                                onClick={() => openModal()}
                            >
                                Add Post
                            </button>
                            <div className='w-5/6'>
                                <LiveSearch onResults={handleSearchResults} />
                            </div>
                        </div>
                        <PostList
                            posts={posts}
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
                handleQuillChange={handleQuillChange}
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