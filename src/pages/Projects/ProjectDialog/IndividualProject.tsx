import ProjectDialog from "../../../components/ProjectDialog/ProjectDialog";

interface IndividualProjectProps {
  openDialog: boolean;
  onCloseDialog: () => void;
}

const IndividualProject: React.FC<IndividualProjectProps> = ({
  openDialog,
  onCloseDialog,
}) => {
  return (
    <ProjectDialog
      openDialog={openDialog}
      projectKey={"casaEma"}
      onCloseDialog={onCloseDialog}
    />
  );
};

export default IndividualProject;
