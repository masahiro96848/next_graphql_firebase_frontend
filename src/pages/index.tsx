import { useState } from 'react'
import { AppSidebar } from '@/components/nav/Sidebar/AppSidebar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Separator } from '@/components/ui/separator'
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const cardsData = Array.from({ length: 10 }, (_, i) => ({
  title: `Card Title ${i + 1}`,
  description: `This is a description for card ${i + 1}.`,
  imageUrl: `https://placehold.jp/3697c7/ffffff/360x180.png?text=dummy`,
}))

export default function Page() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <SidebarProvider>
      <AppSidebar isOpen={isSidebarOpen} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" onClick={toggleSidebar} />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </header>

        <div
          className={`cards-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 transition-all duration-300 ${
            isSidebarOpen ? 'md:ml-64' : 'md:ml-0'
          }`}
        >
          {cardsData.map((card, index) => (
            <Card key={index} className="w-full max-w-sm">
              <CardHeader>
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  width={150}
                  height={150}
                  className="w-full h-32 sm:h-48 object-cover"
                />
              </CardHeader>
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
