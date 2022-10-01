import React, {useState} from 'react';
import Head from 'next/head'
// import Image from 'next/image'

import Row from '../components/Row'
import Column from '../components/Column'
import Text from '../components/Text'
import Button from '../components/Button'
import Img from '../components/Img'
import Stack from '../components/Stack'
import Grid from '../components/Grid'


export default function Quiz() {
  
  return (
    <div>
      <Head>
        <title>Light House</title>
        <meta name="description" content="Light House Quiz App" />
        <link rel="icon" href="images/img_image8.png" />
      </Head>

      <main className=" bg-white_A700 font-opensans 2xl:h-[200px] 3xl:h-[1230px] lg:h-[200px] xl:h-[200px] mx-[auto] w-[100%] max-h-screen">
      <Stack className="flex bg-white_A700 font-opensans 2xl:h-[200px] 3xl:h-[1230px] lg:h-[200px] xl:h-[200px] mx-[auto] w-[100%]">
        <Stack className="absolute lg:h-[144px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[221px] left-[6%] top-[0] w-[35%]">
          <Img
            src="images/img_rectangle1910.png"
            className="absolute lg:h-[144px] xl:h-[164px] 2xl:h-[185px] 3xl:h-[221px] left-[2%] rounded-radius50 w-[98%]"
            alt="Rectangle1910"
          />
          <Row className="flex items-center justify-around absolute bg-gray_200 bottom-[30%] justify-center left-[0] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius8 w-[39%]">
            <Text className="font-normal lg:ml-[27px] xl:ml-[31px] 2xl:ml-[35px] 3xl:ml-[42px] my-[2px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
              Points
            </Text>
            <Text className="font-bold 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mr-[27px] xl:mr-[31px] 2xl:mr-[35px] 3xl:mr-[42px] mt-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
              5
            </Text>
          </Row>
        </Stack>
        <Stack className="absolute 3xl:h-[1184px] lg:h-[767px] xl:h-[878px] 2xl:h-[987px] w-[100%]">
          <Stack className="absolute 3xl:h-[1184px] lg:h-[767px] xl:h-[878px] 2xl:h-[987px] w-[100%]">
            <Stack className="absolute bottom-[1%] 3xl:h-[1170px] lg:h-[758px] xl:h-[867px] 2xl:h-[975px] w-[100%]">
              <Row className="flex flex-row absolute justify-between w-[100%]">
                <Img
                  src="images/img_rectangle1912.png"
                  className="lg:h-[600px] xl:h-[686px] 2xl:h-[772px] 3xl:h-[926px] lg:mt-[157px] xl:mt-[179px] 2xl:mt-[202px] 3xl:mt-[242px] rounded-radius50 w-[35%]"
                  alt="Rectangle1912"
                />
                <Img
                  src="images/img_rectangle1913.png"
                  className="lg:h-[238px] xl:h-[273px] 2xl:h-[307px] 3xl:h-[368px] rounded-radius50 w-[17%]"
                  alt="Rectangle1913"
                />
              </Row>
              <Column className="absolute right-[6%] top-[7%] w-[73%]">
                <Row className="flex items-center justify-end ml-[auto] w-[70%]">
                  <Row className="flex bg-gray_200 items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius8 w-[30%]">
                    <Text className="font-bold ml-[1px] my-[1px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Time Left:
                    </Text>
                    <Text className="font-normal 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-pink_600 w-[auto]">
                      23:00
                    </Text>
                  </Row>
                  <Button
                    className="2xl:ml-[322px] 3xl:ml-[386px] flex items-center justify-center lg:ml-[250px] text-center w-[26%] xl:ml-[286px]"
                    leftIcon={
                      <Img
                        src="images/img_settings.svg"
                        className="text-center lg:w-[14px] lg:mr-[9px] xl:w-[16px] xl:mr-[10px] 2xl:w-[19px] 2xl:mr-[12px] 3xl:w-[22px] 3xl:mr-[14px]"
                        alt="settings"
                      />
                    }
                    variant="FillGray200"
                  >
                    <div className="bg-transparent font-normal not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                      Settings
                    </div>
                  </Button>
                </Row>
                {/* <Stack className=" flex items-center justify-center lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] lg:ml-[274px] xl:ml-[314px] 2xl:ml-[353px] 3xl:ml-[423px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] w-[13%]">
                  <Stack className="flex items-center justify-center absolute lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] w-[100%]">
                    <Img
                      src="images/img_vector.svg"
                      className="absolute bottom-[1%] lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] left-[1%] w-[100%]"
                      alt="Vector"
                    />
                    <Img
                      src="images/img_vector_pink_600.svg"
                      className="absolute lg:h-[114px] xl:h-[130px] 2xl:h-[147px] 3xl:h-[176px] left-[0] w-[50%]"
                      alt="Vector One"
                    />
                  </Stack>
                  <Text className="flex absolute font-bold h-[max-content] inset-[0] justify-center m-[auto] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-gray_900 w-[max-content]">
                    60
                  </Text>
                </Stack> */}
                <Stack className="flex flex-col items-center justify-center">
                <Text className="text-center font-semibold mx-[auto] lg:ml-[31px] xl:ml-[36px] 2xl:ml-[41px] 3xl:ml-[49px] 3xl:mt-[104px] lg:mt-[67px] xl:mt-[77px] 2xl:mt-[87px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-blue_800 w-[auto]">
                  Who is the King of Kings of Isreal
                </Text>
                <Grid className="grid grid-cols-2 lg:gap-[100px] xl:gap-[100px] 2xl:gap-[100px] 3xl:gap-[285px] grid grid-cols-2 lg:mr-[167px] xl:mr-[191px] 2xl:mr-[215px] 3xl:mr-[258px] lg:mt-[37px] xl:mt-[42px] 2xl:mt-[48px] 3xl:mt-[57px] w-[80%]">
                  <Row className="flex items-center border-2 border-blue_800 border-solid lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-radius8 w-[100%]">
                    <Text className="font-bold mb-[1px] 2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] mt-[4px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      A
                    </Text>
                    <Text className="font-normal lg:ml-[17px] xl:ml-[19px] 2xl:ml-[22px] 3xl:ml-[26px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Jesus
                    </Text>
                  </Row>
                  <Row className="flex items-center border-2 border-blue_800 border-solid items-center justify-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius8 w-[100%]">
                    <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      B
                    </Text>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] 2xl:mr-[110px] 3xl:mr-[132px] lg:mr-[85px] xl:mr-[97px] my-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Nathaniel
                    </Text>
                  </Row>
                  <Row className="flex items-center border-2 border-blue_800 border-solid items-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius8 w-[100%]">
                    <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      C
                    </Text>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] my-[1px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Abraham
                    </Text>
                  </Row>
                  <Row className="flex items-center border-2 border-blue_800 border-solid justify-center lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius8 w-[100%]">
                    <Text className="font-bold 3xl:ml-[10px] lg:ml-[7px] xl:ml-[8px] 2xl:ml-[9px] mt-[3px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      D
                    </Text>
                    <Text className="font-normal lg:ml-[18px] xl:ml-[21px] 2xl:ml-[24px] 3xl:ml-[28px] lg:mr-[125px] xl:mr-[143px] 2xl:mr-[161px] 3xl:mr-[193px] mt-[3px] not-italic lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_900 w-[auto]">
                      Isaac
                    </Text>
                  </Row>
                </Grid>
                </Stack>
              </Column>

            </Stack>
            <Img
              src="images/img_rectangle1914.png"
              className="absolute bottom-[0] lg:h-[591px] xl:h-[676px] 2xl:h-[760px] 3xl:h-[912px] right-[0] rounded-radius50 w-[30%]"
              alt="Rectangle1914"
            />
          </Stack>
          <Column className="flex absolute bottom-[1%] inset-x-[0] items-center mx-[auto] w-[88%]">
            
            <footer className="flex items-center justify-center font-poppins lg:mt-[20px] xl:mt-[20px] 2xl:mt-[20px] 3xl:mt-[98px] w-[100%]">
            
              <Row className="flex items-center justify-between w-[100%] mt-[50px]">
                <Button
                  className="flex items-center justify-center text-center w-[15%]"
                  leftIcon={
                    <Img
                      src="images/img_polygon_2.svg"
                      className="text-center lg:w-[18px] lg:h-[19px] lg:mr-[3px] xl:w-[21px] xl:h-[22px] xl:mr-[4px] 2xl:w-[24px] 2xl:h-[25px] 2xl:mr-[5px] 3xl:w-[28px] 3xl:h-[29px] 3xl:mr-[6px]"
                      alt="Polygon 2"
                    />
                  }
                  variant="OutlineBluegray100"
                >
                  <div className="bg-transparent font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px]">
                    Previous
                  </div>
                </Button>
                
                {/* <Row className="flex items-center justify-center rounded-radius16 w-[32%]">
              <Box sx={{ flexGrow: 1 }} className='flex items-center justify-center mx-[auto]'>
              <BorderLinearProgress variant="determinate" value={50} className="lg:h-[25px] xl:h-[29px] 2xl:h-[33px] 3xl:h-[39px] mb-[1px] rounded-radius16 w-[81%]" />
              <Text className="font-normal lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] mt-[1px] not-italic lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-gray_601 w-[auto]">
                {" "}
                1/5
              </Text>
             </Box>
            </Row> */}

                <Button
                  className="font-medium lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[15%]"
                  variant="OutlineBluegray1001_2"
                >
                  Next
                </Button>
              </Row>
            </footer>
          </Column>
        </Stack>
      </Stack>
       </main>

    </div>
  )
}
