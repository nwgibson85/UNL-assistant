import Moment from 'moment';

export const nurseArr = [
    {id: 1, name: 'nurseOne', phone: 1234567890, voalte: 42001, email: 'nurse.One@carle.com', float: '2020-01-01', standby: '2020-01-02', triple: '2020-01-03'},
    {id: 2, name: 'nurseTwo', phone: 1234567908, voalte: 42002, email: 'nurse.Two@carle.com', float: '2019-12-31', standby: '2020-01-01', triple: '2020-01-02'},
    {id: 3, name: 'nurseThree', phone: 9012345678, voalte: 42003, email: 'nurse.Three@carle.com', float: '2019-12-30', standby: '2019-12-31', triple: '2020-01-01'},
    {id: 4, name: 'nurseFour', phone: 8901234567, voalte: 42004, email: 'nurse.Four@carle.com', float: '2019-12-29', standby: '2019-12-30', triple: '2019-12-31'},
    {id: 5, name: 'nurseFive', phone: 7890123456, voalte: 42005, email: 'nurse.Five@carle.com', float: '2019-12-28', standby: '2019-12-29', triple: '2019-12-30'},
    {id: 6, name: 'nurseSix', phone: 6789012345, voalte: 42006, email: 'nurse.six@carle.com', float: '2019-12-27', standby: '2019-12-28', triple: '2019-12-29'},
    {id: 7, name: 'nurseSeven', phone: 5678901234, voalte: 42007, email: 'nurse.seven@carle.com', float: '2019-12-26', standby: '2019-12-27', triple: '2019-12-28'},
    {id: 8, name: 'nurseEight', phone: 4567890123, voalte: 42008, email: 'nurse.eight@carle.com', float: '2019-12-25', standby: '2019-12-26', triple: '2019-12-27'},
    {id: 9, name: 'nurseNine', phone: 3456789012, voalte: 42009, email: 'nurse.nine@carle.com', float: '2019-12-24', standby: '2019-12-25', triple: '2019-12-26'},
    {id: 10, name: 'nurseTen', phone: 2345678901, voalte: 42010, email: 'nurse.Ten@carle.com', float: '2019-12-23', standby: '2019-12-24', triple: '2019-12-25'}];

export const floorArr = [
    {id: 1, room: 7101, phone: 2179047583, lift: false, status: 'clean', nurse_id: 1, tech_id: 1, pt_id: 1},
    {id: 2, room: 7102, phone: 2179047582, lift: false, status: 'occupied', nurse_id: 1, tech_id: 1, pt_id: 2},
    {id: 3, room: 7103, phone: 2179047581, lift: false, status: 'occupied', nurse_id: 2, tech_id: 1, pt_id: 3},
    {id: 4, room: 7104, phone: 2179047580, lift: false, status: 'dirty', nurse_id: 2, tech_id: 1, pt_id: 4},
    {id: 5, room: 7105, phone: 2179047579, lift: false, status: 'clean', nurse_id: 3, tech_id: 1, pt_id: 5},
    {id: 6, room: 7106, phone: 2179047578, lift: false, status: 'occupied', nurse_id: 3, tech_id: 1, pt_id: 6},
    {id: 7, room: 7107, phone: 2179047577, lift: false, status: 'occupied', nurse_id: 4, tech_id: 1, pt_id: 7},
    {id: 8, room: 7108, phone: 2179047576, lift: false, status: 'occupied', nurse_id: 4, tech_id: 2, pt_id: 8},
    {id: 9, room: 7109, phone: 2179047575, lift: false, status: 'occupied', nurse_id: 5, tech_id: 2, pt_id: 9},
    {id: 10, room: 7110, phone: 2179047574, lift: false, status: 'occupied', nurse_id: 5, tech_id: 2, pt_id: 10},
    {id: 11, room: 7111, phone: 2179047573, lift: false, status: 'dirty', nurse_id: 6, tech_id: 2, pt_id: 11},
    {id: 12, room: 7112, phone: 2179047572, lift: false, status: 'occupied', nurse_id: 6, tech_id: 2, pt_id: 12},
    {id: 13, room: 7113, phone: 2179047571, lift: false, status: 'occupied', nurse_id: 7, tech_id: 2, pt_id: 13},
    {id: 14, room: 7114, phone: 2179047570, lift: false, status: 'occupied', nurse_id: 7, tech_id: 2, pt_id: 14},
    {id: 15, room: 7115, phone: 2179047569, lift: false, status: 'occupied', nurse_id: 8, tech_id: 3, pt_id: 15},
    {id: 16, room: 7116, phone: 2179047568, lift: false, status: 'clean', nurse_id: 8, tech_id: 3, pt_id: 16},
    {id: 17, room: 7117, phone: 2179047567, lift: false, status: 'occupied', nurse_id: 9, tech_id: 3, pt_id: 17},
    {id: 18, room: 7118, phone: 2179047566, lift: false, status: 'occupied', nurse_id: 9, tech_id: 3, pt_id: 18},
    {id: 19, room: 7119, phone: 2179047565, lift: false, status: 'occupied', nurse_id: 10, tech_id: 3, pt_id: 19}, 
    {id: 20, room: 7120, phone: 2179047564, lift: false, status: 'occupied', nurse_id: 10, tech_id: 3, pt_id: 20}
];

// save this for 24 hour snap shot sheet
// floorSnapShot [
//     {id: 1, date: 01/01/20, shift: 'day', room_id: 1, nurse_id: 1},
//      
// ]

export const techArr = [
    {id: 1, name: 'techOne', phone: 1234567891, voalte: 42011, email: 'tech.One@carle.com', standby: '2020-01-01', float: '2020-01-02'},
    {id: 2, name: 'techTwo', phone: 1123456789, voalte: 42012, email: 'tech.Two@carle.com', standby: '2019-12-31', float: '2020-01-01'},
    {id: 3, name: 'techThree', phone: 9112345678, voalte: 42013, email: 'tech.Three@carle.com', standby: '2019-12-30', float: '2019-12-31'}
]

export const makeNurseStandbyArr = () => {
    const nurseStandbyArr = practiceStaffing.sort((a,b) => 
    new Moment(a.standby).format('YYYYMMDD') - new Moment(b.standby).format('YYYYMMDD'))
    return nurseStandbyArr;
}
  
export const makeNurseFloatArr = () => {
    const nurseFloatArr = practiceStaffing.sort((a,b) => 
    new Moment(a.float).format('YYYYMMDD') - new Moment(b.float).format('YYYYMMDD'))
    return nurseFloatArr;
}
  
export const makeNurseTripleArr = () => {
    const nurseTripleArr = nurseArr.sort((a,b) => 
    new Moment(a.triple).format('YYYYMMDD') - new Moment(b.triple).format('YYYYMMDD'))
    return nurseTripleArr;
}

export const makeTechFloatArr = () => {
    const techFloatArr = techArr.sort((a,b) => 
    new Moment(a.float).format('YYYYMMDD') - new Moment(b.float).format('YYYYMMDD'))
    return techFloatArr;
}

export const makeTechStandbyArr = () => {
    const techStandbyArr = techArr.sort((a,b) => 
    new Moment(a.standby).format('YYYYMMDD') - new Moment(b.standby).format('YYYYMMDD'))
    return techStandbyArr;
}

export const practiceStaffing = [
    {id: 1, name: 'Jessica Adkins', nick_name: 'Jess', voalte: 42006, phone: 2178981372, float: '2019-07-30', standby: '2018-05-08'},
    {id: 2, name: 'Eric Bennett', nick_name: 'Eric', voalte: 42007, phone: 2178192682, float: '2019-12-28', standby: '2018-04-06'},
    {id: 3, name: 'Samantha Correll', nick_name: 'Sami', voalte: 42494, phone: 3097064157, float: '2020-01-15', standby: '2018-10-15'},
    {id: 4, name: 'Denise Gingerich', nick_name: 'Denise', voalte: 42022, phone: 2174600578, float: '2020-02-08', standby: '2020-01-26'},
    {id: 5, name: 'Shelby Gulley', nick_name: 'Shelby', voalte: 42455, phone: 3092125189, float: '2020-02-23', standby: '2020-01-01'},
    {id: 6, name: 'Carmen Hatton', nick_name: 'Carmen', voalte: 42444, phone: 4062178120, float: '2020-04-02', standby: '2020-01-01'},
    {id: 7, name: 'Drew Jones', nick_name: 'Drew', voalte: 42028, phone: 2173695494, standby: '2020-01-26'},
    {id: 8, name: 'John Lei', nick_name: 'John', voalte: 42943, float: '2000-01-01'},
    {id: 9, name: 'Rachel McCray', nick_name: 'Rachel', voalte: 42072, phone: 2173791817, float: '2020-04-01', standby: '2020-01-01'},
    {id: 10, name: 'Mallory Taylor', nick_name: 'Mallory', voalte: 42044, phone: 2174189429, float: '2020-01-25', standby: '2019-11-07'},
    {id: 11, name: 'Lance Dillon', nick_name: 'Lance', voalte: 42099, float: '2020-01-30'},
    {id: 12, name: 'Alyssa Wichmann', nick_name: 'Alyssa', voalte: 42048, phone: 8158215627, float: '2019-07-04', standby: '2020-01-26'}
]

export const getRoomsForNurse = (rooms = [], nurseId) => (
    (!nurseId)
      ? rooms
      : rooms.filter(room => room.nurse_id === nurseId)
  )