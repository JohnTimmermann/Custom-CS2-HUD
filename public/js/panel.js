var io = io("http://" + ip + ":" + port + "/");
function loadMatch(data) {
  loadTeams(teams => {
    $teamList = $("#team_1, #team_2, #map_1_team, #map_1_winner, #map_2_team, #map_2_winner, #map_3_team, #map_3_winner, #map_4_team, #map_4_winner, #map_5_team, #map_5_winner");
    $teamList.html("<option value=null>NONE</option><option value='auto' selected>Try to match team automatically</option>");

    teams.forEach(function(team, id) {
      let $option = $("<option value='" + team._id + "'>" + team.team_name + " (" + team.short_name + ")</option>");
      if (team.logo) {
        $option.attr("data-icon", "/storage/" + team.logo);
      }
      $teamList.append($option);
    }, this);
    if (data) {
      $("#botype").val(data.match);
      $("#team_1_score")
        .val("0")
        .val(data.team_1.map_score);
      $("#team_2_score")
        .val("0")
        .val(data.team_2.map_score);
      $("#team_1")
        .val("auto")
        .val(data.team_1.team);
      $("#team_2")
        .val("auto")
        .val(data.team_2.team);
      $("#team_1_coach")
        .val("0")
        .val(data.team_1.coach);
      $("#team_2_coach")
        .val("0")
        .val(data.team_2.coach);
      $("#map_1_pick")
        .val("0")
        .val(data.map_1.map_pick);
      $("#map_1_team")
        .val("0")
        .val(data.map_1.map_team);
      $("#map_1_winner")
        .val("0")
        .val(data.map_1.map_winner);
      $("#map_2_pick")
        .val("0")
        .val(data.map_2.map_pick);
      $("#map_2_team")
        .val("0")
        .val(data.map_2.map_team);
      $("#map_2_winner")
        .val("0")
        .val(data.map_2.map_winner);
      $("#map_3_pick")
        .val("0")
        .val(data.map_3.map_pick);
      $("#map_3_team")
        .val("0")
        .val(data.map_3.map_team);
      $("#map_3_winner")
        .val("0")
        .val(data.map_3.map_winner);
      $("#map_4_pick")
        .val("0")
        .val(data.map_4.map_pick);
      $("#map_4_team")
        .val("0")
        .val(data.map_4.map_team);
      $("#map_4_winner")
        .val("0")
        .val(data.map_4.map_winner);
      $("#map_5_pick")
        .val("0")
        .val(data.map_5.map_pick);
      $("#map_5_team")
        .val("0")
        .val(data.map_5.map_team);
      $("#map_5_winner")
        .val("0")
        .val(data.map_5.map_winner);
    }
    $("select").formSelect();
  });
}
$(document).ready(() => {
  if (io.connected) {
    console.log("Panel.js Connected to io");
  }

    // Function to toggle visibility of MapCards based on the selected botype
  function toggleMapCards(botype) {
      if (botype === 'bo1') {
          $('#Map1Card').show();
          $('#Map2Card, #Map3Card, #Map4Card, #Map5Card').hide();
      } else if (botype === 'bo3') {
          $('#Map1Card, #Map2Card, #Map3Card').show();
          $('#Map4Card, #Map5Card').hide();
      } else if (botype === 'bo5') {
          $('#Map1Card, #Map2Card, #Map3Card, #Map4Card, #Map5Card').show();
      }  else if (botype === 'none') {
        $('#Map1Card, #Map2Card, #Map3Card, #Map4Card, #Map5Card').hide();
      }
    }

    // Event listener for botype change
    $('#botype').change(() => {
        const selectedBotype = $('#botype').val();
        toggleMapCards(selectedBotype);
    });
    

    // Initial toggle based on default botype value
    toggleMapCards($('#botype').val());

  $("#set").click(() => {
    let match = {
      match: $("#botype").val(),
      team_1: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val(),
      },
      team_2: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val(),
      },
      map_1: {
        map_pick: $("#map_1_pick").val(),
        map_team: $("#map_1_team").val(),
        map_winner: $("#map_1_winner").val(),
      },
      map_2: {
        map_pick: $("#map_2_pick").val(),
        map_team: $("#map_2_team").val(),
        map_winner: $("#map_2_winner").val(),
      },
      map_3: {
        map_pick: $("#map_3_pick").val(),
        map_team: $("#map_3_team").val(),
        map_winner: $("#map_3_winner").val(),
      },
      map_4: {
          map_pick: $("#map_4_pick").val(),
          map_team: $("#map_4_team").val(),
          map_winner: $("#map_4_winner").val(),
        },
      map_5: {
          map_pick: $("#map_5_pick").val(),
          map_team: $("#map_5_team").val(),
          map_winner: $("#map_5_winner").val(),
        }
    };
    io.emit("update_match", match);
  });
  $("#swap").click(() => {
    let match = {
      match: $("#botype").val(),
      team_2: {
        map_score: $("#team_1_score").val(),
        team: $("#team_1").val(),
        coach: $("#team_1_coach").val()

      },
      team_1: {
        map_score: $("#team_2_score").val(),
        team: $("#team_2").val(),
        coach: $("#team_2_coach").val()
      },
      map_1: {
        map_pick: $("#map_1_pick").val(),
        map_team: $("#map_1_team").val(),
        map_winner: $("#map_1_winner").val(),
      },
      map_2: {
        map_pick: $("#map_2_pick").val(),
        map_team: $("#map_2_team").val(),
        map_winner: $("#map_2_winner").val(),
      },
      map_3: {
        map_pick: $("#map_3_pick").val(),
        map_team: $("#map_3_team").val(),
        map_winner: $("#map_3_winner").val(),
      },
      map_4: {
          map_pick: $("#map_4_pick").val(),
          map_team: $("#map_4_team").val(),
          map_winner: $("#map_4_winner").val(),
        },
      map_5: {
          map_pick: $("#map_5_pick").val(),
          map_team: $("#map_5_team").val(),
          map_winner: $("#map_5_winner").val(),
        }
    };
    io.emit("update_match", match);
  });
  $("#ref").click(() => {
    io.emit("refresh", true);
  });
  io.on("match", loadMatch);
  loadMatch();
  io.emit("ready", true);
});
