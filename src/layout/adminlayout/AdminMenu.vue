<script setup>
import { ref } from 'vue';

import AdminMenuItem from './AdminMenuItem.vue';
const model = ref([
    {
        label: 'Home',
        items: [{ label: 'Graph', icon: 'pi pi-fw pi-chart-bar', to: '/admin' }]
    },
    {
        label: 'Manage',
        items: [
            { label: 'Teacher', icon: 'pi pi-fw pi-user-edit', to: '/admin-teacher' },
            { label: 'Student', icon: 'pi pi-fw pi-users', to: '/admin-student' },
            { label: 'Grade', icon: 'pi pi-fw pi-id-card', to: '/admin-grade' },
            { label: 'Section', icon: 'pi pi-fw pi-home', to: '/admin-section' },
            { label: 'Subject', icon: 'pi pi-fw pi-book', to: '/admin-subject' }
        ]
    },
    {
        items: [{ label: 'Archive', icon: 'pi pi-fw pi-undo', to: '/archive' }]
    },
    {
        items: [{ label: 'Curriculum', icon: 'pi pi-fw pi-briefcase', to: '/curriculum' }]
    }
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="i">
            <admin-menu-item v-if="!item.separator" :item="item" :index="i"></admin-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
