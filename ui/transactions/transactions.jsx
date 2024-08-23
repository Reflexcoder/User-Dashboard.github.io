import Image from "next/image"
import styles from './transactions.module.css'
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
            <thead>
                <tr>
                    <td>Name</td>
                    <td>Status</td>
                    <td>Date</td>
                    <td>Amount</td>
                </tr>
            </thead>
        
        <tbody>
            <tr>
                <td>
                    <div className={styles.user}>
                       <Image src="/client.jpg" alt="" width={40} height={40} className={styles.userImage}/>
                       Jeff Bezos
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>
                    22.08.2024
                </td>
                <td>
                    $999
                </td>
            </tr>
            <tr>
                <td>
                    <div  className={styles.user}>
                       <Image src="/client.jpg" alt="" width={40} height={40} className={styles.userImage}/>
                       Joe Biden
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>
                    22.08.2024
                </td>
                <td>
                    $999
                </td>
            </tr>
            <tr>
                <td>
                    <div  className={styles.user}>
                       <Image src="/client.jpg" alt="" width={40} height={40} className={styles.userImage}/>
                       Elon Musk
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.pending}`}>
                        Pending
                    </span>
                </td>
                <td>
                    22.08.2024
                </td>
                <td>
                    $999
                </td>
            </tr>
            <tr>
                <td>
                    <div  className={styles.user}>
                       <Image src="/client.jpg" alt="" width={40} height={40} className={styles.userImage}/>
                       Virat Kohli
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.done}`}>
                        Done
                    </span>
                </td>
                <td>
                    22.08.2024
                </td>
                <td>
                    $999
                </td>
            </tr>
            <tr>
                <td>
                    <div  className={styles.user}>
                       <Image src="/client.jpg" alt="" width={40} height={40} className={styles.userImage}/>
                       Mukesh Ambani
                    </div>
                </td>
                <td>
                    <span className={`${styles.status} ${styles.cancel}`}>
                        Cancelled
                    </span>
                </td>
                <td>
                    22.08.2024
                </td>
                <td>
                    $999
                </td>
            </tr>
        </tbody>
       </table> 
      
    </div>
  )
}

export default Transactions
