import { useForm } from "react-hook-form";
import { useLoginMutation } from "../api/baseApi";

type LoginValues = {
    email: string;
    password: string;
}

export function LoginForm() {
    const { register, handleSubmit } = useForm<LoginValues>();
    const [ loginUser ] = useLoginMutation()

    async function onSubmit(data: LoginValues) {
        const result = await loginUser(data)

        if (result.data) {
            alert(`Користувач ${result.data.email} увійшов!`)
        } else {
            alert("Помилка входу. Перевірте пошту і пароль.")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="email"
                placeholder="Електронна пошта"
                required
                {...register("email")}
            />
            <input
                type="password"
                placeholder="Пароль"
                required
                {...register("password")}
            />
            <button>Увійти</button>
        </form>
    )
}