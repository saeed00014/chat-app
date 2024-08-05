const Links = ({ icon, link, linkName, name }) => {
  return (
    <a
      target="_blank"
      href={link}
      className="flex flex-col bg-g_Background_Shaded px-6 py-2 w-[16rem] gap-2 rounded-[1rem]"
    >
      <div className="flex items-center gap-2">
        <span className="text-4xl">{icon}</span>
        <span className="text-2xl">{name}</span>
      </div>
      <span>{linkName}</span>
    </a>
  );
};

export default Links;
