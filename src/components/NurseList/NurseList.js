import React from 'react';
import Nurse from '../Nurse/Nurse';
import {practiceStaffing} from '../../nurse-helper';
import './NurseList.css'

export default class NurseList extends React.Component {

    render() {
        // convert notes to rooms, folder to nurses
        // const nurseId = nurse.id
        // const rooms = floorArr.map(rooms => {
        // rooms.push(rooms.id, rooms.room, rooms.nurse_id)
        // return rooms;
        // });
        // const roomsForNurse = getRoomsForNurse(rooms, parseInt(nurseId));
        
        return (
            <section className = 'nurse_List'>
                <ul className = 'nurse_List_Ul'>
                    {practiceStaffing.map((nurse, i) =>
                        <li key = {i} className = {`nurse_${i}`}>
                            <div className = {`nurse_box${i}`}>
                                <Nurse
                                    // will need to change id to db id rather than phone number.
                                    id = {nurse.id}
                                    name = {nurse.nick_name}
                                    voalte = {nurse.voalte}
                                    />
                                <button 
                                    id = {`id_${i}`}
                                    className = 'remove_RN'
                                    type = 'button'
                                    // onClick = {this.handleClickRemove}
                                >
                                    -
                                </button>
                                <select className='room1'>
                                    <option value = '1'>7101</option>
                                    <option value = '2'>7102</option>
                                    <option value = '3'>7103</option>
                                    <option value = '4'>7104</option>
                                    <option value = '5'>7105</option>
                                    <option value = '6'>7106</option>
                                    <option value = '7'>7107</option>
                                    <option value = '8'>7108</option>
                                    <option value = '9'>7109</option>
                                    <option value = '10'>7110</option>
                                    <option value = '11'>7111</option>
                                    <option value = '12'>7112</option>
                                    <option value = '13'>7113</option>
                                    <option value = '14'>7114</option>
                                    <option value = '15'>7115</option>
                                    <option value = '16'>7116</option>
                                    <option value = '17'>7117</option>
                                    <option value = '18'>7118</option>
                                    <option value = '19'>7119</option>
                                    <option value = '20'>7120</option>
                                </select>
                                <select className='room2'>
                                    <option value = '1'>7101</option>
                                    <option value = '2'>7102</option>
                                    <option value = '3'>7103</option>
                                    <option value = '4'>7104</option>
                                    <option value = '5'>7105</option>
                                    <option value = '6'>7106</option>
                                    <option value = '7'>7107</option>
                                    <option value = '8'>7108</option>
                                    <option value = '9'>7109</option>
                                    <option value = '10'>7110</option>
                                    <option value = '11'>7111</option>
                                    <option value = '12'>7112</option>
                                    <option value = '13'>7113</option>
                                    <option value = '14'>7114</option>
                                    <option value = '15'>7115</option>
                                    <option value = '16'>7116</option>
                                    <option value = '17'>7117</option>
                                    <option value = '18'>7118</option>
                                    <option value = '19'>7119</option>
                                    <option value = '20'>7120</option>
                                </select>
                            </div>
                        </li>
                    )}
                </ul>
                <div className = 'nurse_List_button_box'>
                    <button
                        type = 'button'
                        className = 'nurse_List-addNote'>
                            Add RN
                    </button>
                </div>
            </section>
        )
    }
}