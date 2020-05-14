import React, { Component } from 'react';
import '../css/adminSideBar.css'

class SidebarAdmin extends Component {
    render() {
        return (
            <div>
                <div class="wrapper">
    <div class="sidebar">
        <h2>Sidebar</h2>
        <ul>
            <li><a href="/admin/test1"><i class="fas fa-home"></i>Home</a></li>
            <li><a href="/admin/test2"><i class="fas fa-user"></i>Profile</a></li>
            <li><a href="/admin/test3"><i class="fas fa-address-card"></i>About</a></li>
            <li><a href="/admin/test4"><i class="fas fa-project-diagram"></i>portfolio</a></li>
            <li><a href="/admin/test5"><i class="fas fa-blog"></i>Blogs</a></li>
            <li><a href="/admin/test6"><i class="fas fa-address-book"></i>Contact</a></li>
            <li><a href="/admin/test7"><i class="fas fa-map-pin"></i>Map</a></li>
        </ul> 
       
    </div>
   
</div>


            </div>
        );
    }
}

export default SidebarAdmin;