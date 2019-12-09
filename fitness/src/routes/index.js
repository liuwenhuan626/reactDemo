import{
    AdminPeople,
    Course,
    Equipment,
    HomePage,
    Login,
    NotFound,
    PersonalTrainer,
    Staff,
    VipInformation,
    VipRentArk
} from "../pages"

export const mainRoutes = [{
    pathname : "/login",
    component : Login
},
{
    pathname : "/404",
    component : NotFound
}]

export const adminRoutes = [{
    pathname : "/admin/homePage",
    component : HomePage,
    title : "首页",
    isNav : true,
    icon : "setting"
},{
    pathname : "/admin/adminPeople",
    component : AdminPeople,
    title : "管理员信息",
    isNav : true,
    icon : "setting"
},{
    pathname : "/admin/course",
    component : Course,
    title :"课程管理",
    isNav : true,
    icon : "setting"
},{
    pathname : "/admin/equipment",
    component : Equipment,
    title : "设备管理",
    isNav : true,
    icon : "setting"
},{
    pathname : "/admin/personalTrainer",
    component : PersonalTrainer,
    title : "私人教练管理",
    isNav : true,
    icon : "setting"
},{
    pathname : "/admin/staff",
    component : Staff,
    title : "员工管理",
    isNav : true,
    icon : "setting"
},{
    pathname : "/admin/vipInformation",
    component : VipInformation,
    title : "会员信息",
    isNav : true,
    icon : "setting"
},{
    pathname : "/admin/vipRentArk",
    component : VipRentArk,
    title : "会员租柜",
    isNav : true,
    icon : "setting"
}]