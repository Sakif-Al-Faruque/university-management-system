"use client"
import PageHeader from '@/components/Header/PageHeader'
import PageBanner from '@/components/Main/PageBanner'
import SectionHeading from '@/components/Section/SectionHeading'
import AcademicCard from '@/components/Section/AcademicCard'
import Footer from '@/components/Footer/Footer'
import UniStats from '@/components/Section/UniStats'
import NoticeBoard from '@/components/Section/NoticeBoard'
import { BannerImage } from '@/asset/images'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <PageHeader/>
      <PageBanner/>
      <main className="w-full px-0">

        <section id="about-us" className='w-full my-14'>
          <div className="about-us-container w-4/5 mx-auto my-0">
            <SectionHeading 
              title='about us'
              description=' adipisicing elit. Lorem ipsum dolor sit amet consectetur.'
              color='bg-red-600'
            />

            <div className="about-us-content w-full">
              <div className="about-us-content-link-container  border-2 flex flex-col relative w-6/12 mx-auto h-96">
                <div className="about-us-content-link-item text-center">
                  <span className='z-10 inline-block absolute top-1/4 px-2.5 py-1 uppercase hover:text-2xl hover:text-stone-50 rounded h-16 w-40 bg-zinc-700/50 border-box py-4 duration-1000'>demo1</span>
                  <div className="about-us-item-img-container absolute w-full h-full hidden z-0 duration-1000">
                    <Image 
                      src={BannerImage} 
                      alt={"banner image"}
                      className="w-full h-full"            
                    />
                  </div>
                </div>

                <div className="about-us-content-link-item text-center">
                  <span className='z-10 inline-block absolute top-2/4 px-2.5 py-1 uppercase hover:text-2xl hover:text-stone-50 rounded h-16 w-40 bg-zinc-700/50 border-box py-4 duration-1000'>demo2</span>
                  <div className="about-us-item-img-container absolute w-full h-full hidden z-0 duration-1000">
                    <Image 
                      src={BannerImage} 
                      alt={"banner image"}
                      className="w-full h-full"            
                    />
                  </div>
                </div>

                <div className="about-us-content-link-item text-center">
                  <span className='z-10 inline-block absolute top-3/4 px-2.5 py-1 uppercase hover:text-2xl hover:text-stone-50 rounded h-16 w-40 bg-zinc-700/50 border-box py-4 duration-1000'>demo2</span>
                  <div className="about-us-item-img-container absolute w-full h-full hidden z-0 duration-1000">
                    <Image 
                      src={BannerImage} 
                      alt={"banner image"}
                      className="w-full h-full"            
                    />
                  </div>
                </div>

              </div>
            </div>
            <p className='py-4 text-center'><a className='text-red-600 uppercase' href="#">show more</a></p>
          </div>
        </section>






        <section id="academic" className='w-full my-14'>
          <div className="academic-container w-4/5 mx-auto my-0">
            <SectionHeading 
              title='academics'
              description=' adipisicing elit. Lorem ipsum dolor sit amet consectetur.'
              color='bg-yellow-600'
            />
            <div className="academic-card-container flex flex-row flex-wrap justify-between">
              <div className="academic-card-item my-20">
                <AcademicCard title={'Lorem, ipsum.'} description={'Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum.'} details_link={'something'} img={BannerImage}/>
              </div>

              <div className="academic-card-item my-20">
                <AcademicCard title={'Lorem, ipsum.'} description={'Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum.'} details_link={'something'} img={BannerImage}/>
              </div>

              <div className="academic-card-item my-20">
                <AcademicCard title={'Lorem, ipsum.'} description={'Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum.'} details_link={'something'} img={BannerImage}/>
              </div>

              <div className="academic-card-item my-20">
                <AcademicCard title={'Lorem, ipsum.'} description={'Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum. Lorem, ipsum.'} details_link={'something'} img={BannerImage}/>
              </div>
            </div>
          </div>
        </section>



        <section id="university-statistic" className='w-full'>
          <div className="university-statistic-container w-4/5 mx-auto my-0">
            <UniStats/>
          </div>
        </section>




        <section id="notice-board" className='w-full py-56'>
          <div className="notice-board-container w-4/5 mx-auto my-0">
            <SectionHeading 
                title='notices'
                description=' adipisicing elit. Lorem ipsum dolor sit amet consectetur.'
                color='bg-red-600'
              />
            <div className="notice-board-content w-full overflow-scroll h-96" >
              <NoticeBoard date='2020-29-10' title='holiday'/>
              <NoticeBoard date='2020-29-10' title='holiday'/>
              <NoticeBoard date='2020-29-10' title='holiday'/>
              <NoticeBoard date='2020-29-10' title='holiday'/>
              <NoticeBoard date='2020-29-10' title='holiday'/>
              <NoticeBoard date='2020-29-10' title='holiday'/>
              <NoticeBoard date='2020-29-10' title='holiday'/>
              <NoticeBoard date='2020-29-10' title='holiday'/>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
    
  )
}
