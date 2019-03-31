import AdminHome from './../components/admin/AdminHome.vue';


// category
import ListCategory from './../components/admin/category/List.vue';
import CategoryAdd from './../components/admin/category/New.vue';
import CategoryEdit from './../components/admin/category/Edit.vue';


// users
import UserComponent from './../components/admin/users/Index.vue';


// posts
import PostList from './../components/admin/posts/List.vue';
import PostAdd from './../components/admin/posts/New.vue';
import PostEdit from './../components/admin/posts/Edit.vue';


export const routes = [
    // Backend
    {
        path: '/home',
        component: AdminHome
    },
    {
        path: '/admin',
        component: AdminHome
    },
    {
        path: '/admin/home',
        component: AdminHome
    },
    {
        path: '/admin/category-list',
        component: ListCategory
    },
    {
        path: '/admin/category-add',
        component: CategoryAdd
    },
    {
        path: '/admin/category-edit/:categoryid',
        component: CategoryEdit
    },
    {
        path: '/admin/users',
        component: UserComponent
    },
    {
        path: '/admin/posts-list',
        component: PostList
    },
    {
        path: '/admin/posts-add',
        component: PostAdd
    },
    {
        path: '/admin/posts-edit/:postid',
        component: PostEdit
    }
]