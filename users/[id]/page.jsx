import styles from '@/app/ui/dashboard/users/singleUser/singleUser.module.css'
import Image from 'next/image'

const SingleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/virat-kohli.webp" alt="" fill/>
        </div>
        Virat Kohli
      </div>
      <div className={styles.formContainer}>
        <form action='' className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Virat Kohli"/>
          <label>Email</label>
          <input type="email" name="email" placeholder="chiku@gmail.com"/>
          <label>Password</label>
          <input type="password" name="password" placeholder="virushka"/>
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="999 999 999 9"/>
          <label>Address</label>
          <textarea name="address" id="" placeholder="xyz city"></textarea>
          <label>Is Admin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  )
}

export default SingleUserPage
