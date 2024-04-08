import React from 'react';
import UserDetails from '../../Components/UserDetails';
import AdminTab from '../../Components/Admin/AdminTab';
import {ShoppingCart, Users, List} from "lucide-react";
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

import TotalOrders from '../../Components/Admin/TotalOrders';
import TotalProducts from '../../Components/Admin/TotalProducts';
import TotalUsers from '../../Components/Admin/TotalUsers';
function Admin() {
  return (
    <div className='p-5'>
        <UserDetails name="yuvraj" email="syuvraj@gmail.com" />
        <Tabs className="w-full mt-10">
            <TabList className="w-full flex justify-between">
                <Tab className="w-full">
                    <AdminTab>
                        <ShoppingCart size={50}/>
                        <h1 className='text-xl mt-2 font-bold'>10</h1>
                        <p className='text-md font-bold'>Total Products</p>
                    </AdminTab>
                </Tab>
                
                <Tab className="mx-3 w-full">
                    <AdminTab>
                        <List size={50}/>
                        <h1 className='text-xl mt-2 font-bold'>15</h1>
                        <p className='text-md font-bold'>Total Orders</p>
                    </AdminTab>
                </Tab>

                <Tab className="w-full">
                    <AdminTab>
                        <Users size={50}/>
                        <h1 className='text-xl mt-2 font-bold'>50</h1>
                        <p className='text-md font-bold'>Total Users</p>
                    </AdminTab>
                </Tab>   
            </TabList>
            

            <TabPanel className="mt-5">
                <TotalProducts />
            </TabPanel>

            <TabPanel>
                <TotalOrders />
            </TabPanel>

            <TabPanel>
                <TotalUsers />
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default Admin