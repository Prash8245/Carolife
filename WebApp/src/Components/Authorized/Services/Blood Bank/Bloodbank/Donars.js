import React,{useState} from 'react';
import {Tabs, TabsHeader, Tab,Card,CardHeader,Typography,Button,CardBody,CardFooter,Menu,MenuHandler,MenuList,MenuItem} from "@material-tailwind/react";
import data from './donar.json';
import { Link } from 'react-router-dom';
import { bloodGrp } from '../../../../../Context/ArrayContext';



export default function Donars() {
    const [blood, setdata] = useState("All");
    
    const TABLE_HEAD = ["Name", "Blood Type", "Address", "Contact", "History"];
    

  return (
    <div className='blue-gray-100'>
        <section>
        <Tabs value="donars" className="max-w-[40rem] block mx-auto text-center sm:w-full">
                <TabsHeader
                    className="bg-transparent"
                    indicatorProps={{
                    className: "bg-gray-900/10 shadow-none !text-gray-900"
                }}> 
                        <Link to="/blood-bank">
                        <Tab className='w-40'  value="banks">
                            BloodBank
                        </Tab>
                        </Link>
                        
                        <Link to="/blood-donars">
                        <Tab className='w-40'  value="donars">
                            Donars List
                        </Tab>
                        </Link>
                        
                </TabsHeader>
            </Tabs>
        </section>
        <section>
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Donars list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all Donars
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                    <Menu>
                                <MenuHandler>
                                    <Button >Blood Type</Button>
                                </MenuHandler>
                                <MenuList>
                                    {bloodGrp.map((elements, index) => {
                                        return (
                                            <MenuItem
                                                key={index}
                                                onClick={() => {
                                                setdata(elements);
                                            }}>
                                                {elements}</MenuItem>
                                        )
                                    })}
                                </MenuList>
                            </Menu>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70">
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(({
                            name,
                            bloodType,
                            address,
                            contact,
                            history
                        }, index) => {
                            const isLast = index === data.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";
                            
                            if(blood === "All"){
                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                {/* <Avatar src={img} alt={name} size="sm"/> */}
                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {name}
                                                    </Typography>
                                                    {/* <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70">
                                                        {bloodType}
                                                    </Typography> */}
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {bloodType}
                                                </Typography>
                                                {/* <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal opacity-70">
                                                    {contact}
                                                </Typography> */}
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {address}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {contact}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                {history}
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            }else{
                                if(blood === bloodType){
                                    return (
                                        <tr key={index}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    {/* <Avatar src={img} alt={name} size="sm"/> */}
                                                    <div className="flex flex-col">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {name}
                                                        </Typography>
                                                        {/* <Typography
                                                            variant="small"
                                                            color="blue-gray"
                                                            className="font-normal opacity-70">
                                                            {bloodType}
                                                        </Typography> */}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                                        {bloodType}
                                                    </Typography>
                                                    {/* <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70">
                                                        {contact}
                                                    </Typography> */}
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {address}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {contact}
                                                </Typography>
                                            </td>
                                            <td className={classes}>
                                                <Typography variant="small" color="blue-gray" className="font-normal">
                                                    {history}
                                                </Typography>
                                            </td>
                                        </tr>
                                    );
                                }
                                else{
                                    return null
                                }
                                
                            }
                            
                        },)}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter
                className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
        </section>
    </div>
  );
}
