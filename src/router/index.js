import AppLayout from '@/layout/AppLayout.vue';
import LoginLayout from '@/layout/LoginLayout/LoginLayout.vue';
import AdminLayout from '@/layout/adminlayout/AdminLayout.vue';
import EnrollmentLayout from '@/layout/enrollmentlayout/EnrollmentLayout.vue';
import GuardHouseLayout from '@/layout/guardhouselayout/GuardHouseLayout.vue';
import GuestLayout from '@/layout/guestlayout/GuestLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: LoginLayout,
            children: [

                {
                    path: '',
                    name: 'login-page',
                    component: () => import('@/views/pages/Login/LoginPage.vue')
                }
            ]
        },
        {
            path: '/teacher',
            component: AppLayout,
            children: [
                {
                    path: '/teacher',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                },
                {
                    path: '/pages/attendance',
                    name: 'attendance',
                    component: () => import('@/views/pages/Attendance.vue')
                },
                {
                    path: '/pages/report',
                    name: 'report',
                    component: () => import('@/views/pages/Report.vue')
                },
                {
                    path: '/pages/section',
                    name: 'section',
                    component: () => import('@/views/pages/Section.vue')
                },
                {
                    path: '/pages/settings',
                    name: 'settings',
                    component: () => import('@/views/pages/Settings.vue')
                }
            ]
        },
        {
            path: '/admin',
            component: AdminLayout,
            children: [
                {
                    path: '/admin',
                    name: 'admin-graph',
                    component: () => import('@/views/pages/Admin/Admin-Graph.vue')
                },
                {
                    path: '/admin-teacher',
                    name: 'admin-teacher',
                    component: () => import('@/views/pages/Admin/Admin-Teacher.vue')
                },
                {
                    path: '/admin-student',
                    name: 'admin-student',
                    component: () => import('@/views/pages/Admin/Admin-Student.vue')
                },
                {
                    path: '/admin-section',
                    name: 'admin-section',
                    component: () => import('@/views/pages/Admin/Admin-Section.vue')
                },
                {
                    path: '/admin-settings',
                    name: 'admin-settings',
                    component: () => import('@/views/pages/Admin/Admin-Settings.vue')
                },
                {
                    path: '/archive',
                    name: 'archive',
                    component: () => import('@/views/pages/Admin/Archive.vue')
                },
                {
                    path: '/curriculum',
                    name: 'curriculum',
                    component: () => import('@/views/pages/Admin/Curriculum.vue')
                }
            ]
        },
        {
            path: '/guest',
            component: GuestLayout,
            children: [
                {
                    path: '/guest',
                    name: 'guest-dashboard',
                    component: () => import('@/views/guest/GuestDashboard.vue')
                },
                {
                    path: '/guest/student-search',
                    name: 'student-search',
                    component: () => import('@/components/dashboard/SearchStudentId.vue')
                },
                {
                    path: '/guest/student/:id',
                    name: 'student-details',
                    component: () => import('@/views/guest/StudentDetails.vue')
                }
            ]
        },
        {
            path: '/guardhouse',
            component: GuardHouseLayout,
            children: [
                {
                    path: '/guardhouse',
                    name: 'guardhouse',
                    component: () => import('@/views/guardhouse/GuardHouse.vue')
                },
                {
                    path: '/qr-scanner',
                    name: 'QrScanner',
                    component: () => import('@/components/dashboard/QRScanner.vue')
                }
            ]
        },
        {
            path: '/enrollment',
            component: EnrollmentLayout,
            children: [
                {
                    path: '', // Instead of '', now it's '/enrollment/page'
                    name: 'EnrollmentPage',
                    component: () => import('@/layout/enrollmentlayout/EnrollmentPage.vue')
                },
                {
                    path: 'landing', // ✅ Changed from '/enrollment-landing' to 'landing'
                    name: 'EnrollmentLanding',
                    component: () => import('@/views/Enrollment/EnrollmentLanding.vue')
                },
                {
                    path: 'old-student',
                    name: 'OldStudent',
                    component: () => import('@/views/Enrollment/OldStudentForm.vue')
                },
                {
                    path: 'new-student',
                    name: 'NewStudent',
                    component: () => import('@/views/Enrollment/NewStudentForm.vue')
                },
                {
                    path: 'transfer-student',
                    name: 'TransferStudent',
                    component: () => import('@/views/Enrollment/TransferStudentForm.vue')
                }
            ]
        }
    ]
});

export default router;
