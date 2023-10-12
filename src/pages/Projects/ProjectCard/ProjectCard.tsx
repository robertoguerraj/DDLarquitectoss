import {
  Card,
  CardContent,
  CardMedia,
  Hidden,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProjectDialog from "../../../components/ProjectDialog/ProjectDialog";
import getProjectContent, {
  ProjectContentModel,
  ProjectKeys,
} from "../../../projectContent/ProjectContent";

interface ProjectCardProps {
  size: string;
  projectKey: ProjectKeys;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ size, projectKey }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedProjectKey, setSelectedProjectKey] = useState<ProjectKeys>();
  const [projectData, setProjectData] = useState<ProjectContentModel>({
    principalImage: "",
    images: [],
    title: "",
    location: "",
    year: "",
    description: "",
  });

  function handleOpenDialog(projectKey: ProjectKeys) {
    setSelectedProjectKey(projectKey);
    setOpenDialog(true);
  }

  function handleCloseDialog() {
    setOpenDialog(false);
  }

  useEffect(() => {
    const projectContent = getProjectContent(projectKey);
    setProjectData(projectContent ?? ({} as ProjectContentModel));
  }, [projectKey]);

  return (
    <>
      <Card
        sx={{
          backgroundColor: "white",
          maxWidth: <Hidden smUp /> ? "100%" : "900px",
          minWidth: <Hidden smUp /> ? "100%" : "800px",
          borderRadius: 0,
          display: "flex",
          flexDirection: "row", // Default to row for larger screens
          boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px",
        }}
      >
        <Hidden smDown>
          <CardContent
            style={{
              textAlign: "end",
              paddingTop: "0px",
              minWidth: "150px",
            }}
          >
            <Typography component="div">{projectData.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {projectData.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {projectData.year}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            alt={projectData.title}
            style={{
              width: size,
              height: size,
              minWidth: size,
              // transition: "width 0.9s, height 0.9s",
              transitionProperty: "transform",
              transitionTimingFunction: "ease",
              transitionDuration: "200ms",
            }}
            src={projectData.principalImage}
            onClick={() => handleOpenDialog(projectKey)}
          />
        </Hidden>

        <Hidden smUp>
          <CardMedia
            component="img"
            loading="lazy"
            alt={projectData.title}
            style={{
              width: size,
              height: size,
              maxWidth: "100%",
            }}
            src={projectData.principalImage}
            onClick={() => handleOpenDialog(projectKey)}
          />
          <CardContent
            style={{
              textAlign: "start",
              paddingTop: "10px",
              paddingLeft: "0px",
            }}
          >
            <Typography component="div">{projectData.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {projectData.location}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {projectData.year}
            </Typography>
          </CardContent>
        </Hidden>
        <style>
          {`
          @media (max-width: 600px) {
            /* For screens narrower than 600px, change the layout to column */
            .MuiCard-root {
              flex-direction: column;
            }
          }
        `}
        </style>
      </Card>
      <ProjectDialog
        openDialog={openDialog}
        projectKey={selectedProjectKey ?? "casaEma"}
        onCloseDialog={handleCloseDialog}
      ></ProjectDialog>
    </>
  );
};

export default React.memo(ProjectCard);
