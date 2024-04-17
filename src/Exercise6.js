import { SafeAreaView, SectionList, StyleSheet, Text, View } from "react-native";



const mystyle=StyleSheet.create({
    row:{
        paddingHorizontal:10,
        paddingVertical:10,
    },
    name:{
        fontSize:20,
    },
    separator:{
        backgroundColor:"rgba(91, 112, 244, 0.8)",
        height:1,

    },
    sectionHeader:{
        paddingHorizontal:10,
        paddingVertical:10,
        backgroundColor:"rgba(244, 147, 137, 0.85)",
    },
    phone:{
        color:"rgba(245, 39, 67, 0.8)",
        fontSize:20,
        textAlign:"center",
        fontWeight:"bold",
        padding:20,
    }
});

const groupPeopleByLastName=(_data)=>{
    const data=[..._data];
    const groupedData= data.reduce((accumulator, item)=>{
        const group = item.name.last[0].toUpperCase();

        if (accumulator[group]){
            accumulator[group].data.push(item);
        }else{
            accumulator[group]={
                title:group,
                data:[item],
            };
        }
        return accumulator;
    }, {});
    const sections = Object.keys(groupedData).map((key) =>{
        return groupedData[key];
    });
    return sections.sort((a,b) =>{
        if (a.title > b.title){
            return 1;
        }
        return -1;
    });
};

const Exercise6 =() =>{

    return(
        <View>
            <Text style={mystyle.phone}> Danh bạ điện thoại</Text>
            <SafeAreaView>
                <SectionList
                    sections={groupPeopleByLastName(PEOPLE)}
                    keyExtractor={(item)=> `${item.name.firts}-${item.name.last}`}
                    renderSectionHeader={({section}) =>{
                        return(
                            <View>
                                <Text>{section.title}</Text>
                            </View>
                        );
                    }}
                    renderItem={({item}) =>{
                        return(
                            <View>
                                <Text style={mystyle.row}>
                                    {item.name.firts} {item.name.last}
                                </Text>
                            </View>
                        );
                    }}
                    ItemSeparatorComponent={()=> <View style={mystyle.separator}/>}
                />
            </SafeAreaView>
        </View>
    );
};
export default Exercise6;


const PEOPLE =[
    {
        name:{
            title:"Mr",
            firts:"Hau",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Ms",
            firts:"Anh",
            last:"Doan"
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Hoa",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Mr",
            firts:"Khoa",
            last:"Tran",
        },
    },
    {
        name:{
            title:"Mr",
            firts:"Quang",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Yen",
            last:"Huynh",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Nhu",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Ms",
            firts:"Anh",
            last:"Anh",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"An",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Quy",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Toan",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Trung",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Duc",
            last:"Nguyen",
        },
    },
    {
        name:{
            title:"Mrs",
            firts:"Tuan",
            last:"Nguyen",
        },
    },

];