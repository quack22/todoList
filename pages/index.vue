<script setup lang="ts">
import { ref } from "vue";

interface ITodo {
    title: string
    status: boolean
}

const todoStore = useTodoStore();

const { getTodo } = todoStore
const { todos } = storeToRefs(todoStore)

// const todos = ref<ITodo[]>([])
const newTodo = ref<string>('')

await getTodo()

const addTodo = () => {
    if (newTodo.value.trim() !== '') {
        // todos.value.push({ title: newTodo.value, status: false })

        newTodo.value = ''
    }
}

const removeTodo = (index: number) => {
    // todos.value.splice(index, 1)
}

</script>

<template>
    <div class="w-1/2 flex flex-col mx-auto py-4 gap-3">
        <h1 class="text-3xl font-semibold">Daftar To-do</h1>

        <div class="flex gap-2">
            <input 
            v-model="newTodo" 
            class="w-full p-2 border-2 border-blue-400 rounded-md" 
            type="text" 
            placeholder="Tambah tugas baru"
            @keyup.enter="addTodo"
        >
            <button class="p-2 bg-blue-400 text-white rounded-full" @click="addTodo">Tambah</button>
        </div>
    
        <div 
            class="flex gap-2 justify-between pb-2 border-b-[1px] border-gray-300" 
            v-for="(todo, index) in todos" :key="index"
        >
            <div class="flex gap-2">
                <input v-model="todo.status" type="checkbox">
                <span :class="{ 'line-through': todo.status }">{{ todo.title }}</span>
            </div>
            <button class="p-1 bg-red-600 text-white rounded-sm" @click="removeTodo(index)">Hapus</button>
        </div>
    </div>
</template>

<style></style>