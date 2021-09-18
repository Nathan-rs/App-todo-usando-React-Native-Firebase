import React, { useState, useEffect } from "react";
import { View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons"

import firebase from "../../config/firebaseconfig";
import styles from "./style"


export default function Task({ navigation }){
    const [task, setTask] = useState([])
    const database = firebase.firestore()

    function deleteTask(id){
        database.collection("todo").doc(id).delete()
    }

    useEffect(()=>{
        database.collection("todo").onSnapshot((query)=>{
            const list = []
            query.forEach((doc)=>{
                list.push({ ...doc.data(), id: doc.id })
            });
            setTask(list)
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={( {item} )=>{
                    return (
                        
                        // dados do banco de dados
                        <View style={styles.Tasks}>
                            <Text
                                style={styles.DescriptionTask}
                                onPress={()=>{
                                    navigation.navigate("Details",{
                                        id: item.id,
                                        description: item.description,
                                    })
                                }}
                            >
                            {item.description}
                            </Text>

                            {/* Botão de lixeria  */}
                            <TouchableOpacity 
                                style={styles.deleteTask}
                                onPress={() =>{ deleteTask(item.id) }}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={23}
                                    color="#F20544"
                                >
                                </FontAwesome>
                            </TouchableOpacity>
                            
                        </View>
                    )
                }}
            />
            <TouchableOpacity style 
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}