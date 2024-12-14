import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

const sortByScoreDescending = (usersArray) => {
  const copiedUsers = [...usersArray];
  return copiedUsers.sort((a, b) => b.score - a.score);
};

const Leaderboard = () => {
    const [users, setUsers] = useState([
        { id: "1", name: "Alice", score: 80 },    // Now lower score
        { id: "2", name: "Bob", score: 100 },     // Now highest score
        { id: "3", name: "Charlie", score: 90 },  // Now middle score
    ]);

  const sortLeaderboard = () => {
    const sortedUsers = sortByScoreDescending(users);
    setUsers(sortedUsers);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        style={styles.list}
        data={users}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText}>
              {item.name}: {item.score}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <Button 
        title="Sort Leaderboard" 
        onPress={sortLeaderboard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50, // Added marginTop
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    width: '100%',
    marginBottom: 20,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  },
});

export default Leaderboard;