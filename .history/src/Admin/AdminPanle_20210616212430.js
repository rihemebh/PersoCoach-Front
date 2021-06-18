import AdminNav from 'components/Navbars/AdminNav'
import React, { Component } from 'react'
import VerticalNav  from './VerticalNav'
export default class AdminPanel extends Component {
    render() {
        return (
            <div>
                <AdminNav />

                <VerticalNav />
            </div>
        )
    }
}
