import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div{
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    box-shadow: 5px 5px 5px rgba(0,0,0, .1);
    
    header{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background: var(--green);
      color: #fff;
    }
  }

  @media (max-width: 1000px){
    gap: 1rem;
  }

  @media (max-width: 800px){
    gap: 0.5rem;

    div {
      strong {
        font-size: 1.6rem;
      }
    }
  }

  @media (max-width: 700px){
    grid-template-columns: 1fr;
  }
`;