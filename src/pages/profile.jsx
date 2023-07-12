import '../app/globals.css'
import Head from "next/head";
import Styles from '../styles/Style.module.css'
import {
    Card,
    Input,
    Button,
    Typography,
} from "@material-tailwind/react";

export default function Profile() {
    return (
        <>
            <Head>
                <title> Profile </title>
            </Head>

            <div className='h-screen bg-blue-500'>
                <div className="container mx-auto">
                    <div className='flex justify-center items-center h-screen'>
                        <Card className={Styles.border} color="white" shadow={false}>
                            {/* style={{ width: "45%", paddingTop: '3em' }}  */}
                            <Typography variant="h4" color="blue-gray">
                                Profile Account
                            </Typography>
                            <Typography color="gray" className="font-normal">
                                Your personal information
                            </Typography>
                            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                                <div className="flex flex-col gap-1">
                                    <Typography> Name </Typography>
                                    <Input type='text' size='lg' />
                                </div>
                                <div className='flex mt-5 flex-col gap-1'>
                                    <Typography> Email </Typography>
                                    <Input type='text' size="lg" />
                                </div>
                                <div className='flex mt-5 flex-col gap-1'>
                                    <Typography> Address </Typography>
                                    <Input type="text" size="lg" />
                                </div>

                                <Button className="mt-6" fullWidth>
                                    Update
                                </Button>
                            </form>
                        </Card>
                    </div>
                </div>

            </div>



        </>
    )
}