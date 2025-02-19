import React from "react";
import "./toolsadvice.css";

const toolsData = [
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="tool-icon-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 17l4-6 4 3 4-5 6 9"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 17c1-2 2-4 3-3s2 4 4 2 3-4 4-4 3 3 4 3"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2v20m-10-2h20"
        />
      </svg>
    ),
    title: "Rates & Trends",
    description: "Know all about Property Rates & Trends in your city",
    link: "/listings",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="tool-icon-svg"
      >
        <rect x="6" y="4" width="12" height="16" rx="2" ry="2" stroke="black" />
        <circle cx="12" cy="10" r="1.5" fill="currentColor" />
        <rect x="9" y="14" width="1" height="1" fill="currentColor" />
        <rect x="14" y="14" width="1" height="1" fill="currentColor" />
        <rect x="11.5" y="14" width="1" height="1" fill="currentColor" />
      </svg>
    ),
    title: "ROI Calculator",
    description: "Know how much you'll have to pay every month on your loan",
    link: "/listings",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="tool-icon-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2.25c2.9 0 5.25 2.35 5.25 5.25s-2.35 5.25-5.25 5.25-5.25-2.35-5.25-5.25S9.1 2.25 12 2.25z"
          stroke="black"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 10.5V14m0 0l-2.25 3h4.5L12 14z"
          stroke="black"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 15.5h3l-1.5 1.5z"
          stroke="black"
        />
        <text x="10" y="10" fontSize="5" fill="currentColor">₹</text>
      </svg>
    ),
    title: "Investment Hotspot",
    description: "Discover the top localities in your city for investment",
    link: "listings",
  },
  {
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="tool-icon-svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 4h12v16H6z"
          stroke="black"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 6h8v4H8z"
          stroke="black"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h8v6H8z"
          stroke="black"
        />
        <path d="M8 6h8v1H8zM8 15h8v1H8z" fill="currentColor" />
      </svg>
    ),
    title: "Research Insights",
    description: "Get experts insights and research reports on real estate",
    link: "listings",
  },
];

const ToolCard = ({ svg, title, description, link }) => (
  <div className="tool-card">
    <div className="tool-icon-wrapper">{svg}</div>
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link}>View now &rarr;</a>
  </div>
);

const ToolsAdvice = () => (
  <div className="tools-advice-wrapper">
    <h2>Advice and Tools</h2>
    <div className="tools-advice">
      {toolsData.map((tool, index) => (
        <ToolCard
          key={index}
          svg={tool.svg}
          title={tool.title}
          description={tool.description}
          link={tool.link}
        />
      ))}
    </div>
  </div>
);

export default ToolsAdvice;
