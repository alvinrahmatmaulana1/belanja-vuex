<template>
    
    <div class="mt-16">
        <div>Nama : {{ getUsers.name }}</div>
        <div>Email : {{ getUsers.email }}</div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('user',['getUsers'])
    },
    methods: {
        ...mapActions('user', ['fetchUsers']),
    },
    created() {
        this.fetchUsers();
    }
}

</script>