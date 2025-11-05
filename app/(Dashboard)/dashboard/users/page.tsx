import Link from 'next/link';

const Users = () =>{
    return (
        <div>
                <h1>Users</h1>
                <ul>
                    <li><Link href="/dashboard/users/1">Users1</Link></li>
                    <li><Link href="/dashboard/users/2">Users2</Link></li>
                    <li><Link href="/dashboard/users/3">Users3</Link></li>
                </ul>
        </div>
    )
}

export default Users;