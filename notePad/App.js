// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

// export default function App() {
//   const [enteredNote, setEnteredNote] = useState('');
//   const [notes, setNotes] = useState([]);

//   const noteInputHandler = (enteredText) => {
//     setEnteredNote(enteredText);
//   };

//   const addNoteHandler = () => {
//     setNotes(currentNotes => [...currentNotes, enteredNote]);
//     setEnteredNote('');
//   };

//   const deleteNoteHandler = noteIndex => {
//     setNotes(currentNotes => {
//       return currentNotes.filter((note, index) => index !== noteIndex);
//     });
//   };

//   return (
//     <View style={styles.screen}>
//       <View style={styles.inputContainer}>
//         <TextInput 
//           placeholder="Note" 
//           style={styles.input} 
//           onChangeText={noteInputHandler}
//           value={enteredNote}
//         />
//         <Button title="ADD" onPress={addNoteHandler} />
//       </View>
//       <ScrollView>
//         {notes.map((note, index) => (
//           <View key={index} style={styles.listItem}>
//             <Text>{note}</Text>
//             <Button title="DELETE" onPress={deleteNoteHandler.bind(this, index)} />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50
//   },
//   inputContainer: {
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center'
//   },
//   input: {
//     width: '80%', 
//     borderColor: 'black', 
//     borderWidth: 1, 
//     padding: 10
//   },
//   listItem: {
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#ccc',
//     borderColor: 'black',
//     borderWidth: 1
//   }
// });

//modified code with search, edit, delete and share button
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button, ScrollView, Share } from 'react-native';

// export default function App() {
//   const [enteredNote, setEnteredNote] = useState('');
//   const [notes, setNotes] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [currentNoteIndex, setCurrentNoteIndex] = useState();
//   const [searchString, setSearchString] = useState('');

//   const noteInputHandler = (enteredText) => {
//     setEnteredNote(enteredText);
//   };

//   const addNoteHandler = () => {
//     setNotes(currentNotes => [...currentNotes, enteredNote]);
//     setEnteredNote('');
//   };

//   const deleteNoteHandler = noteIndex => {
//     setNotes(currentNotes => {
//       return currentNotes.filter((note, index) => index !== noteIndex);
//     });
//   };

//   const editNoteHandler = index => {
//     setEnteredNote(notes[index]);
//     setIsEditing(true);
//     setCurrentNoteIndex(index);
//   };

//   const saveNoteHandler = () => {
//     setNotes(currentNotes => {
//         const updatedNotes = [...currentNotes];
//         updatedNotes[currentNoteIndex] = enteredNote;
//         return updatedNotes;
//     });
//     setEnteredNote('');
//     setIsEditing(false);
//   };

//   const searchInputHandler = inputText => {
//     setSearchString(inputText);
//   };

//   const displayedNotes = notes.filter(note => note.includes(searchString));

//   const shareNote = async note => {
//     try {
//       await Share.share({
//         message: note,
//       })
//     } catch (error) {
//       alert('Could not share note.');
//     }
//   };

//   return (
//     <View style={styles.screen}>
//       <View style={styles.inputContainer}>
//         <TextInput 
//           placeholder="Note" 
//           style={styles.input} 
//           onChangeText={noteInputHandler}
//           value={enteredNote}
//         />
//         <Button title={isEditing ? "SAVE" : "ADD"} onPress={isEditing ? saveNoteHandler : addNoteHandler} />
//       </View>
//       <TextInput placeholder="Search" onChangeText={searchInputHandler} />
//       <ScrollView>
//         {displayedNotes.map((note, index) => (
//           <View key={index} style={styles.listItem}>
//             <Text>{note}</Text>
//             <Button title="EDIT" onPress={editNoteHandler.bind(this, index)} />
//             <Button title="DELETE" onPress={deleteNoteHandler.bind(this, index)} />
//             <Button title="Share" onPress={shareNote.bind(this, note)} />
//           </View>
//         ))}
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   screen: {
//     padding: 50
//   },
//   inputContainer: {
//     flexDirection: 'row', 
//     justifyContent: 'space-between', 
//     alignItems: 'center'
//   },
//   input: {
//     width: '80%', 
//     borderColor: 'black', 
//     borderWidth: 1, 
//     padding: 10
//   },
//   listItem: {
//     padding: 10,
//     marginVertical: 10,
//     backgroundColor: '#ccc',
//     borderColor: 'black',
//     borderWidth: 1
//   }
// });

// modified code below with the search at the top
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, Share } from 'react-native';

export default function App() {
  const [enteredNote, setEnteredNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState();
  const [searchString, setSearchString] = useState('');

  const noteInputHandler = (enteredText) => {
    setEnteredNote(enteredText);
  };

  const addNoteHandler = () => {
    setNotes(currentNotes => [...currentNotes, enteredNote]);
    setEnteredNote('');
  };

  const deleteNoteHandler = noteIndex => {
    setNotes(currentNotes => {
      return currentNotes.filter((note, index) => index !== noteIndex);
    });
  };

  const editNoteHandler = index => {
    setEnteredNote(notes[index]);
    setIsEditing(true);
    setCurrentNoteIndex(index);
  };

  const saveNoteHandler = () => {
    setNotes(currentNotes => {
        const updatedNotes = [...currentNotes];
        updatedNotes[currentNoteIndex] = enteredNote;
        return updatedNotes;
    });
    setEnteredNote('');
    setIsEditing(false);
  };

  const searchInputHandler = inputText => {
    setSearchString(inputText);
  };

  const displayedNotes = notes.filter(note => note.includes(searchString));

  const shareNote = async note => {
    try {
      await Share.share({
        message: note,
      })
    } catch (error) {
      alert('Could not share note.');
    }
  };

  return (
    <View style={styles.screen}>
      <TextInput 
        placeholder="Search" 
        style={styles.searchInput} 
        onChangeText={searchInputHandler} 
      />
      <ScrollView>
        {displayedNotes.map((note, index) => (
          <View key={index} style={styles.listItem}>
            <Text>{note}</Text>
            <View style={styles.buttonContainer}>
              <Button title="EDIT" onPress={editNoteHandler.bind(this, index)} />
              <Button title="DELETE" onPress={deleteNoteHandler.bind(this, index)} />
              <Button title="Share" onPress={shareNote.bind(this, note)} />
            </View>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Note" 
          style={styles.input} 
          onChangeText={noteInputHandler}
          value={enteredNote}
        />
        <Button title={isEditing ? "SAVE" : "ADD"} onPress={isEditing ? saveNoteHandler : addNoteHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
    justifyContent: 'space-between'
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  searchInput: {
    marginBottom: 20,
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
  input: {
    width: '80%', 
    borderColor: 'black', 
    borderWidth: 1, 
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  }
});