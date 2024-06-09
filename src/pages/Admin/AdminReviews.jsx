import React from 'react'
import AdminLayout from '../../components/Dashboard/Layout/adminlayout'
import ReviewsTable from '../../components/Table/Reviews'

const AdminReviews = () => {
  return (
    <AdminLayout>
    <div className="my-5">
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <ReviewsTable />
        </div>
      </div>
    </div>
  </AdminLayout>
  )
}

export default AdminReviews