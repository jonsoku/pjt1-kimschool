import React from 'react';
import styled from 'styled-components';
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 2rem;
  background: skyblue;
  min-height: 200px;
`;

const Box = styled.div`
  background: black;
  min-height: 200px;
  color: white;
  cursor: pointer;
  > div {
    &:nth-of-type(1) {
      background: red;
      &::before {
        content: '(임시)category명';
        background: black;
      }
    }
    &:nth-of-type(2) {
      margin-top: 2rem;
    }
    &:nth-of-type(3) {
    }
  }
`;
const RenderYoutubes = ({
  handleCreateLink,
  Javas,
  Webs,
  Androids,
  handleChange,
  handleChange2,
  handleLinkShow,
  keyword,
}) => {
  return (
    <div>
      <button onClick={() => handleCreateLink()}>create</button>
      <div>
        <div>
          <h3>JAVA</h3>
          <select value={keyword.test} onChange={handleChange2}>
            <option value="1">자바 기초반</option>
            <option value="2">자바 속성반</option>
            <option value="3">자바 취업반</option>
          </select>
          <input
            type="text"
            placeholder="JAVA 강의 검색..."
            name="JavaKeyword"
            value={keyword.JavaKeyword}
            onChange={handleChange}
          />
          <Grid>
            {Javas.map(java => (
              <Box key={java.id} onClick={() => handleLinkShow(java.id)}>
                <div>
                  {java.categories.map(category => (
                    <div key={category.id}>{category.name}</div>
                  ))}
                </div>
                {/* <div>
                  {java.youtube_subjects.map(youtube_subject => (
                    <span key={youtube_subject.id}>{youtube_subject.name}</span>
                  ))}
                </div> */}
                <div>{java.title}</div>
                <div>{java.description}</div>
              </Box>
            ))}
          </Grid>
        </div>

        <div>
          <h3>WEB</h3>
          <input
            type="text"
            placeholder="JAVA 강의 검색..."
            name="WebKeyword"
            value={keyword.WebKeyword}
            onChange={handleChange}
          />
          <Grid>
            {Webs.map(web => (
              <Box key={web.id}>
                <div>
                  {web.categories.map(category => (
                    <div key={category.id}>{category.name}</div>
                  ))}
                </div>
                <div>{web.title}</div>
                <div>{web.description}</div>
              </Box>
            ))}
          </Grid>
        </div>

        <div>
          <h3>Android</h3>
          <input
            type="text"
            placeholder="JAVA 강의 검색..."
            name="AndroidKeyword"
            value={keyword.AndroidKeyword}
            onChange={handleChange}
          />
          <Grid>
            {Androids.map(android => (
              <Box key={android.id}>
                <div>
                  {android.categories.map(category => (
                    <div key={category.id}>{category.name}</div>
                  ))}
                </div>
                <div>{android.title}</div>
                <div>{android.description}</div>
              </Box>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default RenderYoutubes;
