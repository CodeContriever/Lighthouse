import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Row from '../components/Row'
import Column from '../components/Column'
import Text from '../components/Text'
import Img from '../components/Img'
import Button from '../components/Button'
import Stack from '../components/Stack'

import { PinInput, PinInputField } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

export default function Join() {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>Light House</title>
        <meta name="description" content="Light House Quiz App" />
        <link rel="icon" href="images/img_image8.png" />
      </Head>

      <main className="flex items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] max-h-screen">

        <Row className="flex items-center justify-center font-opensans items-center mx-[auto] lg:p-[18px] xl:p-[21px] 2xl:p-[24px] 3xl:p-[28px] w-[100%] max-h-screen">
        <Column className="flex flex-col items-center xl:ml-[112px] 2xl:ml-[127px] 3xl:ml-[152px] lg:ml-[98px] lg:mr-[133px] xl:mr-[152px] 2xl:mr-[171px] 3xl:mr-[205px] w-[29%]">
        <Text className="font-semibold lg:text-[31px] xl:text-[35px] 2xl:text-[40px] 3xl:text-[48px] text-black_900 w-[auto]">
            Join Game
          </Text>
          
          <Column className="flex flex-col items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[76%]">
          <FormControl as='fieldset' isRequired className="flex flex-col items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
          <Stack>
            <PinInput
            type='alphanumeric'
            className="flex items-center lg:mt-[38px] xl:mt-[44px] 2xl:mt-[50px] 3xl:mt-[60px] w-[100%]">
            <PinInputField className='w-[60px] h-[60px]'/>
            <PinInputField className='w-[60px] h-[60px]'/>
            <PinInputField className='w-[60px] h-[60px]'/>
           <PinInputField className='w-[60px] h-[60px]'/>
            </PinInput>
          </Stack>
          

            <Button
              className="border-none rounded-none font-semibold bg-[#005EBF] text-[#ffffff] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[100%]"
              shape="RoundedBorder24"
              size="lg"
              variant="OutlineBlue800"
              onClick={() => router.push('/quiz')}
            >
              Join
            </Button>
            </FormControl>
            </Column>

        </Column>

        <Column
          className="flex flex-col items-center justify-around bg-cover bg-repeat items-center lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] 2xl:p-[107px] 3xl:p-[128px] lg:p-[83px] xl:p-[95px] rounded-lg w-[40%] h-[850px] max-h-screen"
          style={{ backgroundImage: "url('images/img_group3.png')" }}
        >
          <Img
            src="images/img_image8.png"
            className="lg:h-[151px] xl:h-[173px] 2xl:h-[195px] 3xl:h-[233px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] lg:w-[150px] xl:w-[172px] 2xl:w-[194px] 3xl:w-[232px]"
            alt="imageEight"
          />
          <Text className="font-normal mt:[50px] lg:leading-[24px] xl:leading-[28px] 2xl:leading-[32px] 3xl:leading-[38px] lg:mt-[248px] xl:mt-[283px] 2xl:mt-[319px] 3xl:mt-[383px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center text-gray_900 w-[78%]">
            “Almost all creativity involves purposeful play.” <br />– Abraham
            Maslow
          </Text>

          <Stack className="flex gap-3 items-center  w-[100%]">
          <Button
              className="border-none rounded-none font-semibold bg-[#DD086C] text-[#ffffff] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
              shape="RoundedBorder24"
              size="lg"
              variant="OutlineBlue800"
              onClick={() => router.push('/login')}
            >
              Log in
            </Button>

            <Button
              className="border-none rounded-none font-semibold bg-[#005EBF] text-[#ffffff] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[48%]"
              shape="RoundedBorder24"
              size="lg"
              variant="OutlineBlue800"
              onClick={() => router.push('/signup')}
            >
              Sign up
            </Button>
            </Stack>
        </Column>

        
      </Row>
       </main>

    </div>
  )
}
