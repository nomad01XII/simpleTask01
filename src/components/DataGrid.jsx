import { DataGrid } from '@mui/x-data-grid'
import { useGetAllUsersQuery } from '../features/allData/userSlice'

//Uncomment for fetching with redux
//import { useDispatch, useSelector } from 'react-redux'
//import { useEffect } from 'react'
// import { getData } from '../redux/actions/action'


const columns = [
  { field: 'id', headerName: 'ID', width: 50 },
  { field: 'name', headerName: 'Title', width: 200 },
  { field: 'email', headerName: 'Body', width: 200 },
  { field: 'username', headerName: 'Username', width: 150 },
  { field: 'website', headerName: 'Website', width: 200 }
]

const Datagrid = () => {
  //Uncomment for fetching with redux
  // fetching with redux
  // const { posts } = useSelector((state) => state.user)
  // const dispatch = useDispatch();

  const { data, isSuccess } = useGetAllUsersQuery();

  // useEffect(() => {

  //   dispatch(fetchUsers());

  // }, [])

  return (
    <div style={{ height: 600, width: '80%' }}>
      {isSuccess && <DataGrid
        rows={data}
        columns={columns}
        pageSize={9}
      />}
    </div>
  )
}

export default Datagrid

