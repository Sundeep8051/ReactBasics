import AccordionComponent from "./AccordionComponent";

const ListItems = [
  {
    id: 1,
    label: "React",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit architecto beatae, excepturi cum illum accusantium ut sapiente temporibus distinctio aspernatur, quidem placeat iure ducimus perspiciatis repudiandae debitis officia expedita.",
  },
  {
    id: 2,
    label: "Vue",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusamus facere in ea, non tempore suscipit, necessitatibus unde doloremque quaerat autem architecto sequi at molestias, quibusdam dolorem minima perferendis error?",
  },
  {
    id: 3,
    label: "Angular",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex corrupti minima quia, ipsa quis dolores, omnis quam numquam provident harum consequatur qui sequi esse sunt praesentium, quas cum voluptate illum.",
  },
];

const AccordionPage = () => {
  return (
    <div>
      <AccordionComponent items={ListItems}></AccordionComponent>
    </div>
  );
};

export default AccordionPage;
