import { Link } from "@inertiajs/react";
import DOMPurify from 'dompurify';

function ListProject({ datas, APP_URL, setData, setIsUpdate, openModal, onDeleteHandler }) {

    const formatDateHandler = (dateString) => {
        const date = new Date(dateString);
        const options = { day: '2-digit', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('id-ID', options).replace(/\s/g, '/');
    }

    const onClickEditHandler = async (data) => {
        await setIsUpdate(true)
        await setData(data)
        openModal()
    }

    return (
        <div className="overflow-x-auto">
            <table className="table text-black text-base">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-black text-base font-bold">No</th>
                        <th className="text-black text-base font-bold">Title</th>
                        <th className="text-black text-base font-bold">Author</th>
                        <th className="text-black text-base font-bold">Devision</th>
                        <th className="text-black text-base font-bold">Highlight</th>
                        <th className="text-black text-base font-bold">Updated</th>
                        <th className="text-black text-base font-bold">Created</th>
                        <th className="text-black text-base font-bold">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas.data.length == 0 ? (
                            <th className="text-center">Data Kosong</th>
                        ) :
                            datas.data.map((data, index) => (
                                <tr key={data.id} className="hover:bg-black/[0.1]">
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={`${APP_URL}/storage/${data.image}`} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{data.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{data.user.name}</td>
                                    <td>{data.devision}</td>
                                    <td>
                                        <label className="inline-flex items-start cursor-pointer">
                                            <input type="checkbox" checked={data.highlight} className="sr-only peer" onChange={e => setData('highlight', e.target.checked)} />
                                            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                        </label>
                                    </td>
                                    <td>{formatDateHandler(data.updated_at)}</td>
                                    <td>{formatDateHandler(data.created_at)}</td>
                                    <td>
                                        <div className="grid grid-cols-2 gap-5">
                                            <button className="btn btn-warning px-1" onClick={
                                                () => { onClickEditHandler(data) }
                                            }>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                </svg>
                                            </button>
                                            <button className="btn btn-error px-1" onClick={
                                                () => {
                                                    event.preventDefault()
                                                    onDeleteHandler(data.id)
                                                }
                                            }>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 stroke-2">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>

            <div className="join mt-4">
                {
                    datas.links.map((data) => (
                        <Link key={data.url} href={data.url} className={`join-item btn border-0 hover:text-white ${data.active ? 'bg-dark text-white' : 'bg-white text-gray-800 '}`} dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(data.label) }}></Link>
                    ))
                }
            </div>
        </div>
    )
}

export default ListProject