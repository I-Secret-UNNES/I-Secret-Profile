import React, { useState, useEffect, useCallback } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import EmployeeList from './EmployeeComponents/EmployeeList';
import FormModal from './EmployeeComponents/FormModal';
import DeleteModal from './EmployeeComponents/DeleteModal';
import Pagination from './EmployeeComponents/Pagination';
import LiveSearch from './EmployeeComponents/LiveSearch';

export default function Employee({ auth, employees: initialEmployees }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    role: '',
    profile_img: null,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [employees, setEmployees] = useState(initialEmployees.data);
  const [pagination, setPagination] = useState({
    current_page: initialEmployees.current_page,
    last_page: initialEmployees.last_page,
    from: initialEmployees.from,
    to: initialEmployees.to,
    total: initialEmployees.total,
    per_page: initialEmployees.per_page,
  });
  const [editEmployeeId, setEditEmployeeId] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    setEmployees(initialEmployees.data);
    setPagination({
      current_page: initialEmployees.current_page,
      last_page: initialEmployees.last_page,
      from: initialEmployees.from,
      to: initialEmployees.to,
      total: initialEmployees.total,
      per_page: initialEmployees.per_page,
    });
  }, [initialEmployees]);

  const openModal = useCallback(
    (employee = null) => {
      if (employee) {
        setIsEditMode(true);
        setEditEmployeeId(employee.id);
        setData({
          name: employee.name,
          role: employee.role,
          profile_img: null,
        });
      } else {
        setIsEditMode(false);
        setEditEmployeeId(null);
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
    Inertia.get(
      route('employees.index', { page }),
      {},
      {
        preserveState: true,
        preserveScroll: true,
        onSuccess: page => {
          setEmployees(page.props.employees.data);
          setPagination({
            current_page: page.props.employees.current_page,
            last_page: page.props.employees.last_page,
            from: page.props.employees.from,
            to: page.props.employees.to,
            total: page.props.employees.total,
            per_page: page.props.employees.per_page,
          });
        },
      }
    );
  }, []);

  const roles = [
    { value: 1, name: 'Ketua' },
    { value: 2, name: 'Wakil Ketua' },
    { value: 3, name: 'Sekretaris' },
    { value: 4, name: 'Bendahara' },
    { value: 5, name: 'Media and UI' },
    { value: 6, name: 'Networking' },
    { value: 7, name: 'Research' },
    { value: 8, name: 'Programming' },
  ];

  const handleSearchResults = useCallback(
    results => {
      if (results && JSON.stringify(results) !== JSON.stringify(employees)) {
        setEmployees(results);
      } else if (!results) {
        handlePageChange(pagination.current_page);
      }
    },
    [employees, pagination.current_page, handlePageChange]
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

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('role', data.role);
      if (data.profile_img) {
        formData.append('profile_img', data.profile_img);
      }

      const routeAction = isEditMode
        ? route('employees.update', editEmployeeId)
        : route('employees.store');

      Inertia.post(routeAction, formData, {
        onSuccess: () => {
          closeModal();
          if (isEditMode) {
            setEmployees(prev =>
              prev.map(employee =>
                employee.id === editEmployeeId
                  ? { ...employee, ...data, profile_img: employee.profile_img }
                  : employee
              )
            );
          } else {
            setEmployees(prev => [data, ...prev]);
          }
        },
      });
    },
    [data, isEditMode, editEmployeeId, closeModal]
  );

  const handleDelete = useCallback(
    id => {
      Inertia.delete(route('employees.destroy', id), {
        onSuccess: () => {
          setEmployees(prev => prev.filter(employee => employee.id !== id));
          closeDeleteModal();
        },
      });
    },
    [closeDeleteModal]
  );

  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <h2 className='font-semibold text-xl text-gray-800 leading-tight'>
          Employee
        </h2>
      }
    >
      <Head title='Employee' />

      <div className='py-12'>
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
          <div className='bg-white overflow-hidden shadow-sm sm:rounded-lg'>
            <div className='flex justify-between space-x-4 p-6 text-gray-900'>
              <button
                className='w-1/6 btn bg-secondary border-none text-white shadow-md hover:bg-tertiary'
                onClick={() => openModal()}
              >
                Add Employee
              </button>
              <div className='w-5/6'>
                <LiveSearch onResults={handleSearchResults} />
              </div>
            </div>
            <EmployeeList
              employees={employees}
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
        roles={roles}
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
