import React, { useState } from 'react';
import './style.css';
import { emojiList } from './emojies';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create an emoji search app, where you can type and search for any emoji from the given list of emojis

export default function App() {
  const [emojis, setEmojis] = useState(emojiList);
  const [searchEmoji, setSearchEmoji] = useState('');
  const handleEmojisSearch = (e) => {
    if (e.target.value == '') {
      setEmojis(emojiList);
    } else {
      console.log(e.target.value);
      const filterEmoji = emojiList.filter((emoji) =>
        emoji.name.toLowerCase().includes(searchEmoji.toLowerCase())
      );
      setEmojis(filterEmoji);
    }
    setSearchEmoji(e.target.value);
  };
  return (
    <div
      className="border p-5"
      style={{
        width: '45rem',
        margin: 'auto',
        marginTop: '2rem',
        marginBottom: '2rem',
        textAlign: 'center',
      }}
    >
      <h1 className="text-primary">Emoji Searcher App</h1>
      <input
        className="form-control m-5"
        style={{ width: '32rem' }}
        type="text"
        placeholder="Search emoji by name"
        value={searchEmoji}
        onChange={handleEmojisSearch}
      />
      <table className="table table-hover table-bordered table-dark table-striped">
        <thead>
          <tr>
            <th>Emoji</th>
            <th>Emoji Name</th>
          </tr>
        </thead>
        <tbody>
          {emojis.map((emoji) => (
            <tr key={emoji.id}>
              <td>{emoji.emoji}</td>

              <td>{emoji.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {emojis.length == 0 && <p>No emojis Found</p>}
    </div>
  );
}
