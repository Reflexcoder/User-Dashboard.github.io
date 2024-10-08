import Image from "next/image"
import styles from '@/app/ui/sidebar/sidebar.module.css'
import { MdSpaceDashboard, MdSupervisedUserCircle,MdShoppingBag,MdAttachMoney} from "react-icons/md";
import MenuLink from "./menuLink/menulink";

const menuItems = [
    {
    title:"Users",
    list:[
        {
            title:"Dashboard",
            path:"/dashboard",
            icon:<MdSpaceDashboard/>,
        },
        {
            title:"Users",
            path:"/dashboard/users",
            icon: <MdSupervisedUserCircle/>,
        },
        {
            title:"Products",
            path:"/dashboard/products",
            icon:<MdShoppingBag/>,
        },
        {
            title:"Transactions",
            path:"/dashboard/transactions",
            icon:<MdAttachMoney/>,
        },
    ],
},
]

const Sidebar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
      <Image className={styles.userImage} src="/avatar.png" width="50" height="50" alt="user image"/>
      <div className={styles.userDetail}>
         <span className={styles.username}>Hello</span>
         <span className={styles.userTitle}>World</span>
      

      </div>
      </div>
         <ul className={styles.list}>
            {menuItems.map((item)=>(
            <li key={item.title}>
               <span className={styles.item}>{item.title}</span>
            {
                item.list.map((i)=>(
                    <MenuLink item={i} key={i.title}/>
                ))
            }
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Sidebar
