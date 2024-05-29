import { defineStore } from "pinia";
interface ITodo {
    title: string
    status: boolean
}

export const useTodoStore = defineStore('todos', () => {   
    const todos = ref<ITodo[] | null>([])

    const getTodo = async () => {
        const {baseUrl, apiKey, secretKey } = useAppConfig()

        // don't forget to input ITodo inside the useFetch method
        const { data, error } = await useFetch<ITodo[]>('rest/v1/to-do', {
          baseURL: baseUrl,
          method: 'GET', 
          headers: {
            apiKey: apiKey,
            Authorization: `Bearer ${secretKey}`
          }
        })

        if (todos) {
            todos.value = data.value
        }

        console.log(baseUrl, apiKey, secretKey);
        

        console.log("VALUE", data.value)
        console.log("ERROR", error.value);
    }

    return {
        todos,
        getTodo
    }
})