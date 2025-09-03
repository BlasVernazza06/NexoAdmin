'use client'

import {useState} from 'react'
import AuthCard from "@/app/components/authCard"
import { Building, Eye, EyeOff, Lock, Mail, User } from 'lucide-react'
import Link from 'next/link'

export default function Register() {
    const [showPassword, setShowPassword] = useState()
    const [showPasswordConfirm, setShowPasswordConfirm] = useState()
    const [isLoading, setIsLoading] = useState(false)


    return (
        <div className="flex items-center justify-center min-h-screen bg-[var(--color-bg)]">
            <div className="flex flex-col max-w-5xl">
                <div>
                    <header className="flex flex-col gap-4 items-center justify-center mb-10 ">
                        <p className="font-bold text-4xl">NexoAdmin</p>
                        <span className="text-[var(--color-text-muted)] text-xl">Sistema de administración empresarial</span>
                    </header>
                    <AuthCard>
                        <header className='text-center mb-7'>
                            <p className='text-2xl font-bold mb-2'>Crear Cuenta</p>
                            <span className='text-md text-[var(--color-text-muted)]'>Completa los datos para comenzar a gestionar tu sistema</span>
                        </header>
                        <form className='flex flex-col'>
                            <div className='flex flex-col gap-8'>
                                <div className="flex flex-col gap-2">
                                    <label>Nombre completo</label>
                                    <User className='size-4 absolute translate-y-[46px] translate-x-3 text-[var(--color-text-muted)]'/>
                                    <input 
                                        type="text"
                                        placeholder="Juan Pérez"
                                        className="pl-10 border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label>Correo electrónico</label>
                                    <Mail className='size-4 absolute translate-y-[46px] translate-x-3 text-[var(--color-text-muted)]'/>
                                    <input 
                                        type="text"
                                        placeholder="Email"
                                        className="pl-10 border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label>Empresa</label>
                                    <Building className='size-4 absolute translate-y-[46px] translate-x-3 text-[var(--color-text-muted)]'/>
                                    <input 
                                        type="text"
                                        placeholder="Nombre de tu empresa"
                                        className="pl-10 border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label>Contraseña</label>
                                    <Lock className='size-4 absolute translate-y-[46px] translate-x-3 text-[var(--color-text-muted)]'/>
                                    <input 
                                        type={showPassword ? "text" : "password"}
                                        aria-label='Contraseña'
                                        placeholder="••••••••"
                                        required
                                        className="pl-10 border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500"
                                    />
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setShowPassword(!showPassword)
                                        }}
                                        className='absolute right-3 top-10/14 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors'
                                    >
                                        {showPassword ? <EyeOff className='size-4'/> : <Eye className='size-4'/>}
                                    </button>
                                </div>
                                <div className="flex flex-col gap-2 relative">
                                    <label>Confirmar contraseña</label>
                                    <Lock className='size-4 absolute translate-y-[46px] translate-x-3 text-[var(--color-text-muted)]'/>
                                    <input 
                                        type={showPasswordConfirm ? "text" : "password"}
                                        aria-label='Contraseña'
                                        placeholder="••••••••"
                                        required
                                        className="pl-10 border-2 border-gray-300 rounded-xl p-2 focus:outline-none focus:border-blue-500"
                                    />
                                    <button 
                                        onClick={(e) => {
                                            e.preventDefault()
                                            setShowPasswordConfirm(!showPasswordConfirm)}
                                        }
                                        className='absolute right-3 top-10/14 -translate-y-1/2 text-[var(--color-text-muted)] hover:text-[var(--color-text)] transition-colors'
                                    >
                                        {showPasswordConfirm ? <EyeOff className='size-4'/> : <Eye className='size-4'/>}
                                    </button>
                                </div>
                            </div>
                            <div className='flex justify-between mt-7'>
                                <div className='flex items-center  gap-2'>
                                    <input type="checkbox" />
                                    <label className='text-[var(--color-text-muted)] [&_span]:text-[var(--color-brand)]'>Acepto los <span>términos y condiciones</span>  y la <span>política de privacidad</span></label>
                                </div>
                            </div>

                            <button
                                type='submit'
                                className='w-full bg-[var(--color-brand)] hover:bg-[var(--color-brand)]/96 cursor-pointer text-white rounded-xl p-2 mt-5 font-bold'
                            >
                                {isLoading ? "Iniciando Sesion..." : "Iniciar Sesion"}
                            </button>
                        </form>

                        <footer className='text-sm flex gap-2 items-center justify-center mt-5'>
                            <span className='text-[var(--color-text-muted)]'>
                                ¿Ya tienes cuenta?
                            </span>
                            <Link
                                href={'/login'}
                                className='text-[var(--color-brand)]'
                            >
                                Inicia sesión aqui
                            </Link>
                        </footer>

                    </AuthCard>
                </div>

                <div className="hidden lg:flex flex-1 items-center justify-center relative bg-gradient-to-r from-[var(--color-brand)] to-[var(--color-accent)]">

                </div>
            </div>
        </div>
    );
}