import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  Hidden,
  IconButton,
  Slide,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React from "react";
import getProjectContent, {
  ProjectKeys,
} from "../../projectContent/ProjectContent";

interface ProjectDialogProps {
  openDialog: boolean;
  onCloseDialog: () => void;
  projectKey: ProjectKeys;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectDialog: React.FC<ProjectDialogProps> = ({
  openDialog,
  onCloseDialog,
  projectKey,
}) => {
  const content = getProjectContent(projectKey);

  // Split the description into paragraphs based on line breaks
  const descriptionParagraphs = content?.description.split("\n");

  return (
    <div>
      <Dialog
        fullScreen
        open={openDialog}
        onClose={onCloseDialog}
        TransitionComponent={Transition}
        scroll={"body"}
      >
        <DialogTitle
          sx={{ m: 2, p: 2 }}
          id="customized-dialog-title"
          style={{ fontSize: "30px", fontWeight: "bold", lineHeight: "normal" }}
        >
          {content?.title}
          <br />
          {content?.location}
          <br />
          {content?.year}
          <br />
        </DialogTitle>
        <Hidden smDown>
          <IconButton
            aria-label="Cerrar"
            onClick={onCloseDialog}
            sx={{
              right: 50,
              top: 30,
              fontSize: 30,
            }}
            style={{
              position: "fixed",
              zIndex: 1000,
              color: "black",
              backgroundColor: "#80808021",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            {"X"}
          </IconButton>
        </Hidden>

        <Hidden smUp>
          <IconButton
            aria-label="Cerrar"
            onClick={onCloseDialog}
            sx={{
              right: 10,
              top: 10,
              fontSize: 20,
            }}
            style={{
              position: "fixed",
              zIndex: 1000,
              color: "black",
              backgroundColor: "#80808021",
              padding: "10px 20px",
              borderRadius: "5px",
              maxWidth: "850px",
            }}
          >
            {"X"}
          </IconButton>
        </Hidden>

        <DialogContent>
          <Grid container spacing={8}>
            {content?.images?.map((image, index) => (
              <>
                <Grid item xs={12} sm={6}>
                  <img
                    src={image}
                    alt={descriptionParagraphs[index]}
                    style={{
                      width: "100%",
                      backgroundColor: "rgb(128 128 128 / 9%)",
                    }}
                    loading="lazy"
                  />
                </Grid>
                {descriptionParagraphs[index] && (
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    style={{
                      alignSelf: "center",
                      textAlign: "justify",
                    }}
                  >
                    <Typography variant="body1">
                      {descriptionParagraphs[index]}
                    </Typography>
                  </Grid>
                )}
              </>
            ))}
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDialog;
