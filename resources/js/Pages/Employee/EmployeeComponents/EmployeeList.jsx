import React from 'react';

export default function EmployeeList({ employees, onEdit, onDelete }) {
  // Function to map role value to role name
  const getRoleName = value => {
    switch (value) {
      case 1:
        return 'Ketua';
      case 2:
        return 'Wakil Ketua';
      case 3:
        return 'Sekretaris';
      case 4:
        return 'Bendahara';
      case 5:
        return 'Media and UI';
      case 6:
        return 'Networking';
      case 7:
        return 'Research';
      case 8:
        return 'Programming';
      default:
        return 'Unknown Role';
    }
  };

  if (employees.length === 0) {
    return <div className='m-2'>No I-Secret Employee data to display</div>;
  }

  return (
    <div className='overflow-x-auto'>
      <table className='table'>
        <thead>
          <tr>
            <th className='text-gray-700'>No.</th>
            <th className='text-gray-700'>Employee Id</th>
            <th className='text-gray-700'>Profile Image</th>
            <th className='text-gray-700'>Name</th>
            <th className='text-gray-700'>Role</th>
            <th className='text-gray-700'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>
                <div>
                  <div className='text-gray-700'>{index + 1}</div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{employee.id}</div>
                </div>
              </td>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img src={employee.profile_img} alt='Profile Image' />
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div>
                  <div className='text-gray-700'>{employee.name}</div>
                </div>
              </td>
              <td>
                <span className='text-gray-700'>
                  {getRoleName(employee.role)}
                </span>
              </td>
              <td>
                <button
                  className='btn bg-secondary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-blue-900'
                  onClick={() => onEdit(employee)}
                >
                  Edit
                </button>
                <button
                  className='btn bg-primary text-gray-50 mx-2 border-none rounded-md shadow-lg hover:bg-red-600'
                  onClick={() => onDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
