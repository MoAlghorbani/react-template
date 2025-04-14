import reactQueryLogo from '@/assets/react-query.svg'
import reactRouterLogo from '@/assets/react-router.svg'
import reactLogo from '@/assets/react.svg'
import shadcnLogo from '@/assets/shadcn.svg'
import tailwindLogo from '@/assets/tailwind.svg'
import zustandLogo from '@/assets/zustand.svg'
import linguiLogo from '@/assets/lingui.svg'
import { ModeToggle } from '@/components/mode-toggole'
import { Link } from 'react-router'
import viteLogo from '/vite.svg'
export const HomePage = () => {
    return (
        <>
            <ModeToggle />
            {/* <Link to="/react-router">React Router</Link> */}
            <div className='flex justify-center'>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo w-30" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo w-30" alt="React logo" />
                </a>
                <a href="https://reactrouter.com" target="_blank">
                    <img src={reactRouterLogo} className="logo w-30 " alt="React Router logo" />
                </a>
                <a href="https://zustand.docs.pmnd.rs/" target="_blank">
                    <img src={zustandLogo} className="logo w-30" alt="Zustand logo" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                    <img src={tailwindLogo} className="logo w-30" alt="Tailwind logo" />
                </a>
                <a href="https://ui.shadcn.com/" target="_blank">
                    <img src={shadcnLogo} className="logo w-30 invert dark:invert-0" alt="Shadcn logo" />
                </a>
                <a href="https://tanstack.com/query/latest/" target="_blank">
                    <img src={reactQueryLogo} className="logo w-30" alt="React Query logo" />
                </a>
                <a href="https://lingui.dev/" target="_blank">
                    <img src={linguiLogo} className="logo w-30" alt="Lingui logo" />
                </a>
            </div>
            <h3 className="text-center my-10">Vite + React + React Router (data mode) + Zustand + Tailwind + Shadcn + React Query + Lingui</h3>
        </>
    )
}
