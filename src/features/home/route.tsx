import reactLogo from '@/assets/react.svg'
import reactRouterLogo from '@/assets/react-router.svg'
import zustandLogo from '@/assets/zustand.svg'
import tailwindLogo from '@/assets/tailwind.svg'
import shadcnLogo from '@/assets/shadcn.svg'
import reactQueryLogo from '@/assets/react-query.svg'
import viteLogo from '/vite.svg'
import { ModeToggle } from '@/components/mode-toggole'
import { Button } from '@/components/ui/button'
export const HomePage = () => {
    return (
        <>
            <ModeToggle />
            <div className='flex'>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://reactrouter.com" target="_blank">
                    <img src={reactRouterLogo} className="logo react-router" alt="React Router logo" />
                </a>
                <a href="https://zustand.docs.pmnd.rs/" target="_blank">
                    <img src={zustandLogo} className="logo zustand" alt="Zustand logo" />
                </a>
                <a href="https://tailwindcss.com/" target="_blank">
                    <img src={tailwindLogo} className="logo tailwind" alt="Tailwind logo" />
                </a>
                <a href="https://ui.shadcn.com/" target="_blank">
                    <img src={shadcnLogo} className="logo shadcn" alt="Shadcn logo" />
                </a>
                <a href="https://tanstack.com/query/latest/" target="_blank">
                    <img src={reactQueryLogo} className="logo react-query" alt="React Query logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">

                <Button>Click me</Button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
        </>
    )
}
