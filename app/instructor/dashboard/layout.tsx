"use client"

import UserDashboardNav from "@/components/Section/InstructorDashboardNav"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
     <div className="dashboard w-full flex flex-wrap justify-between flex-row">
      <div className="dashboard-left-portion">
        <UserDashboardNav/>
      </div>
      <div className="dashboard-right-portion">{children}</div>
     </div>
  )
}