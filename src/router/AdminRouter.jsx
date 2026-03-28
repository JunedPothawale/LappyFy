import { Route, Routes } from 'react-router-dom'


const AdminRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Dashboard />}></Route>
                <Route path='*' element={<FileNotFound />}></Route>
            </Routes>
        </>
    )
}

export default AdminRouter
