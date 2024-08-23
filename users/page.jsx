import Image from "next/image"
import styles from '@/app/ui/dashboard/users/users.module.css'
import Link from "next/link"
import { fetchUsers } from "@/app/lib/data"

const UserPage = async() => {

  const users=await fetchUsers();
  console.log(users)
  return (
    <div className={styles.container}>
        <div className={styles.top}>
          <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
          </Link>
         
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Created at</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/client.jpg" width={40} height={40} className={styles.userImage}/>
                  Virat Kohli
                </div>
              </td>
              <td>
                chiku@gmail.com
              </td>
              <td>21.08.2024</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <Link href="/dashboard/users/singleUser">
                <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/client.jpg" width={40} height={40} className={styles.userImage}/>
                  Jeff Bezos
                </div>
              </td>
              <td>
                Jeff@gmail.com
              </td>
              <td>12.08.2024</td>
              <td>Admin</td>
              <td>active</td>
              <td>
              <button className={`${styles.button} ${styles.view}`}>View</button>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                    <Image src="/client.jpg" width={40} height={40} className={styles.userImage}/>
                  Jeff Bezos
                  
                </div>
              </td>
              <td>
                Jeff@gmail.com
              </td>
              <td>12.08.2024</td>
              <td>Admin</td>
              <td>active</td>
              <td>
              <button className={`${styles.button} ${styles.view}`}>View</button>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src="/client.jpg" width={40} height={40}className={styles.userImage}/>
                  Jeff Bezos
                </div>
              </td>
              <td>
                Jeff@gmail.com
              </td>
              <td>12.08.2024</td>
              <td>Admin</td>
              <td>active</td>
              <td>
              <button className={`${styles.button} ${styles.view}`}>View</button>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default UserPage
