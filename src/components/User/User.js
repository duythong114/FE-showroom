import React, { useEffect, useState } from 'react';
import './User.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../../slices/userSlice';
import ReactPaginate from 'react-paginate';

const User = (props) => {
    const dispatch = useDispatch()
    const listUsers = useSelector(state => state.user.listUsers)
    const isLoggedIn = useSelector(state => state.user.isLoggedIn)
    const totalPages = useSelector(state => state.user.totalPages)

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(2)

    useEffect(() => {
        if (isLoggedIn === true) {
            let pagination = { page, limit }
            dispatch(fetchAllUsers(pagination))
        }
        // eslint-disable-next-line
    }, [page])

    const handlePageClick = (event) => {
        setPage(event.selected + 1)
    }

    return (
        <div className='users-container' >
            <div className="container">
                <table className="table table-hover customers mt-3">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Email</th>
                            <th scope="col">FirstName</th>
                            <th scope="col">LastName</th>
                            <th scope="col">Address</th>
                            <th scope="col">PhoneNumber</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listUsers && listUsers.length > 0 &&
                            listUsers.map((item, index) => (
                                <tr key={`user-${index}`}>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.address}</td>
                                    <td>{item.phoneNumber}</td>
                                    <td>
                                        <div className='action-container'>
                                            <button className='btn btn-warning'>Edit</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>

                {totalPages && totalPages > 0 &&
                    <ReactPaginate
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={3}
                        marginPagesDisplayed={3}
                        pageCount={totalPages}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakLabel="..."
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                }
            </div>
        </div>
    )
}

export default User;