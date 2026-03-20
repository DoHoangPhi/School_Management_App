import FormModal from '@/components/FormModal'
import Pagination from '@/components/Pagination'
import Table from '@/components/Table'
import TeacherSearch from '@/components/TeacherSearch'
import { classesData, examsData, lessonsData, parentsData, role } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Exam = {
    id: number,
    subject: string,
    class: number,
    teacher: number,
    date: string,
}

const colums = [
    {
        header: 'Subject', accessor: 'subject'
    },
    {
        header: 'Class', accessor: 'class', className: "hidden md:table-cell"
    },
    {
        header: 'Teacher', accessor: 'teacher', className: "hidden md:table-cell"
    },
    {
        header: 'Date', accessor: 'date', className: "hidden md:table-cell"
    },
    {
        header: 'Actions', accessor: 'actions'
    },
]

const ExamListPage = () => {

    const renderRow = (item: Exam) => (
        <tr key={item.id} className='border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPureLight'>
            <td className='flex items-center gap-4 p-4'>
                <div className='flex flex-col'>
                    <h3 className='font-semibold'>{item.subject}</h3>
                </div>
            </td>

            <td className='hidden md:table-cell'>
                {item.class}
            </td>
            <td className='hidden md:table-cell'>
                {item.teacher}
            </td>
            <td className='hidden md:table-cell'>
                {item.date}
            </td>
            <td>
                <div className='flex items-center gap-2'>
                    {/* <Link href={`/list/teachers/${item.id}`}>
                        <button className='w-7 h-7 flex items-center bg-lamaSky justify-center rounded-full'>
                            <Image src={`/edit.png`} alt='' width={16} height={16} />
                        </button>
                    </Link> */}
                    {role === 'admin' && (
                        // <button className='w-7 h-7 flex items-center bg-lamaPure justify-center rounded-full'>
                        //     <Image src={`/delete.png`} alt='' width={16} height={16} />
                        // </button>
                        <>
                            <FormModal table='exam' type='update' data={item} />
                            <FormModal table='exam' type='delete' id={item.id} />
                        </>
                    )}
                </div>
            </td>
        </tr>
    )

    return (
        <div className='bg-white p-4 rounded-md flex-1 m-4 mt-0'>
            {/* TOP */}
            <div className='flex items-center justify-between'>
                <h1 className='hidden md:block text-lg font-semibold'>All Exam</h1>
                <div className='flex flex-col md:flex-row items-center gap-4 w-full md:w-auto'>
                    <TeacherSearch />
                    <div className='flex items-center gap-4 self-end'>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src='/filter.png' alt='filter' width={14} height={14} />
                        </button>
                        <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            <Image src='/sort.png' alt='filter' width={14} height={14} />
                        </button>
                        {role === 'admin' && (
                            // <button className='w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow'>
                            //     <Image src='/plus.png' alt='filter' width={14} height={14} />
                            // </button>
                            <FormModal table='exam' type='create' />
                        )}
                    </div>
                </div>
            </div>
            {/* LIST */}
            <Table columns={colums} renderRow={renderRow} data={examsData} />
            {/* PAGINATION */}
            <Pagination />

        </div>
    )
}

export default ExamListPage
